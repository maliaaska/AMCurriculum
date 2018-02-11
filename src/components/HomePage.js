import React from 'react';

import { NavLink } from 'react-router-dom'
const HomePage = () => (
  <div>
    <h1>Welcome!</h1>
    <div>
      <div><NavLink to="/homepage" activeClassName="is-active" >Home</NavLink></div>
      <div><NavLink to="/homepage/projects" activeClassName="is-active" >Projects</NavLink></div>
      <div><NavLink to="/homepage/profile-page" activeClassName="is-active" >Profile</NavLink></div>
    </div>
  </div>
);

export default HomePage;