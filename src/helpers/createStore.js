import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export default () => {
  // create store for server
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
}
