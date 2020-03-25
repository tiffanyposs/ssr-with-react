import React from 'react';

// 'staticContext' is magically renamed from the key 'context'
// with the static router, won't exist on the browser side
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops, route not found.</h1>
}

export default {
  component: NotFoundPage,
}
