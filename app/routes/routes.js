import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from '../containers/Root';
import App from '../containers/App';
import HomePage from '../containers/HomePage';
import StylePage from '../containers/StylePage';
import SettingPage from '../containers/SettingPage';
import RegisterPage from '../containers/RegisterPage';
import LoginPage from '../containers/LoginPage';
import ForgetPage from '../containers/ForgetPage';
import TestPage from '../containers/TestPage';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={App} />
    <Route path="app" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="style" component={StylePage} />
      <Route path="setting" component={SettingPage} />
      <Route path="test" component={TestPage} />
    </Route>
    <Route path="register" component={RegisterPage} />
    <Route path="login" component={LoginPage} />
    <Route path="forget" component={ForgetPage} />
  </Route>
);
