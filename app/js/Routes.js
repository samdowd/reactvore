'use strict';

import React                                from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App                                  from './App';
import HomePage                             from './pages/HomePage';
import LoginPage                            from './pages/LoginPage';
import NotFoundPage                         from './pages/NotFoundPage';

export default (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
    <Route name='Login' path='/login/' handler={LoginPage} />

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);