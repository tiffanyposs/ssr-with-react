// startup point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

// create a customized instance of axios
const axiosInstance = axios.create({
  baseURL: '/api', // default to using the base /api for all requests in this instance
});


// setup the store
// pass in the reducers,
// initial state,
// and apply middleware
// * Pass in axiosInstance to the thunk.withExtraArgument method
// this will go to the action creator as an argument
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance)), //
);
// instead of .render, use .hydrate which means,
// "We know you already sent static stuff, now add all the events"
// Pass in the browser side router
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
