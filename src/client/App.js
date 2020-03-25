import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// react-route-config will pass in the routes as a prop
// pull off the current route and pass it to renderRoutes
// look at the ./Routes.js file for structure
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}
