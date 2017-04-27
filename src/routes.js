import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import LearnPage from './containers/LearnPage';
import TestPage from './containers/TestPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="learn" component={LearnPage}/>
    <Route path="test" component={TestPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
