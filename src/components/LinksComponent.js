import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksComponent = (props) => (
  <div>
    <div><NavLink to="/homepage" activeClassName="is-active" >Home</NavLink></div>
    <div><NavLink to="/homepage/projects-page" activeClassName="is-active">Projects</NavLink></div>
    <div><NavLink to="/homepage/profile-page" activeClassName="is-active" >Profile</NavLink></div>
  </div>
);

export default LinksComponent;