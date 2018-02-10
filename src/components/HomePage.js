import React from 'react';
import { NavLink } from 'react-router-dom'
const HomePage = () => (
  <div className="dashboard-box">
    <h1>Welcome!</h1>
    <p>This is my home page, take a look aroud</p>
    <NavLink to="/homepage" activeClassName="is-active" >Home</NavLink>
    <NavLink to="/homepage/projects" activeClassName="is-active" >Projects</NavLink>
    <NavLink to="/homepage/profile" activeClassName="is-active" >Profile</NavLink>

    </div>
);

export default HomePage;