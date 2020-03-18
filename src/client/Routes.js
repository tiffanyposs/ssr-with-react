import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// router setup with react-router-config library
export default [
  {
    // since we aren't tying a path to this
    // it will always display on the screen
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
    ]
  }
];
