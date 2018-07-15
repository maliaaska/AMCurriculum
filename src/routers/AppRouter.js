import React from 'react';
import {Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage  from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ProjectsPage from '../components/ProjectsPage';
import ProfilePage from '../components/ProfilePage';
import ThinkTwice from '../components/ThinkTwice';
// import ProfilePage from '../components/ProfilePage';
// import ProfilePage from '../components/ProfilePage';

export const history = createHistory();  

const AppRouter = () => (
  <Router history={history}>
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true}/>
      <PrivateRoute path="/homepage" component={HomePage} exact={true} />
      <PrivateRoute path="/homepage/profile-page" component={ProfilePage}  />
      <PrivateRoute path="/homepage/projects-page" component={ProjectsPage}  />
      <PrivateRoute path="/homepage/think-twice" component={ThinkTwice} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

</Router> 
);


export default AppRouter;

