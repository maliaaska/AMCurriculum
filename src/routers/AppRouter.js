import React from 'react';
import {Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Projects from '../components/Projects';
import Profile from '../components/Profile';
import PortfolioListPage from '../components/PortfolioListPage';

export const history = createHistory();  

const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true}/>
      <PrivateRoute path="/homepage" component={HomePage} exact={true} />
      <PrivateRoute path="/homepage/profile" component={Profile} exact={true} />
      <PrivateRoute path="/homepage/projects" component={PortfolioListPage} exact={true} />
      <PrivateRoute path="/homepage/projects/:id" component={Projects} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

</Router> 
);


export default AppRouter;

