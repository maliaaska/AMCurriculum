import React from 'react';
import { NavLink } from 'react-router-dom';

const LinksComponent = (props) => (
  <div className='list'>
    <div><NavLink to="/homepage" activeClassName="is-active"><p>Home</p></NavLink></div>
    <div><NavLink to="/homepage/projects-page" activeClassName="is-active"><p>Projects</p></NavLink></div>
    <div><NavLink to="/homepage/profile-page" activeClassName="is-active"><p>Profile</p></NavLink></div>
  </div>
);

export default LinksComponent;