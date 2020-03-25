import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';

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
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      // react will show this component if react router
      // does not find a matching route (404)
      {
        ...NotFoundPage,
      },
    ]
  }
];
