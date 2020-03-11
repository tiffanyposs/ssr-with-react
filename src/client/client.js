// startup point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';
// setup the store
// pass in the reducers,
// initial state,
// and apply middleware
const store = createStore(reducers, {}, applyMiddleware(thunk));
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
