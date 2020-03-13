import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

// req comes in for the express server
export default req => {
  // create an axios instance with the base url
  // and get the cookies from the original request object
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || '',
    }
  });
  // create store for server
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)), // pass axios instance to thunk
  );
  return store;
}
