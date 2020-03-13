import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
// import custom store for server side
import createStore from './helpers/createStore';
const app = express();


const PORT = 3000;

// if the browser ever makes a request to our renderer server
// with a route that starts with /api we will try to send
// it off to the proxy server
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

// tell express to open the public folder to the public (client side)
app.use(express.static('public'));

// use all routes
app.get('*', (req, res) => {
  const store = createStore(req);

  // matchRoutes returns an array of components that are about the be rendered
  // map through them and if the loadData method is attached, then run it passing the store
  // the loadData will envoke the needed actions to load the data for the component
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  // wait for all the data
  // by adding this setup, the data with load data will be send down
  // with the initial HTML request
  Promise.all(promises).then(() => {
    // all data requests are finished
    // load data into the store
    res.send(renderer(req, store));
  });

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
