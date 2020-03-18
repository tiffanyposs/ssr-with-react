import React from 'react';
import { renderRoutes } from 'react-router-config';

// react-route-config will pass in the routes as a prop
// pull off the current route and pass it to renderRoutes
// look at the ./Routes.js file for structure
const App = ({ route }) => {
  return (
    <div>
      <h1>I'm a header</h1>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default {
  component: App,
}
