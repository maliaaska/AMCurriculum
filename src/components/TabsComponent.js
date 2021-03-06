import React from 'react';
import { NavLink } from 'react-router-dom';

const TabsComponent = () => (
    <div className='tab-box'>
      <div><NavLink className='nav-link' to="/homepage" activeClassName="is-active"><p>Home</p></NavLink></div>
      <div><NavLink className='nav-link' to="/homepage/projects-page" activeClassName="is-active"><p>Projects</p></NavLink></div>
      <div><NavLink className='nav-link' to="/homepage/profile-page" activeClassName="is-active"><p>Profile</p></NavLink></div>
    </div>  
);

export default TabsComponent;