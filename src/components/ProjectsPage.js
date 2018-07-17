import React from 'react';
import { NavLink } from 'react-router-dom'
import TabsComponent from './TabsComponent';
import ThinkTwiceDescr from './ThinkTwiceDescr';
import CatPosterStoreDescr from './CatPosterStoreDescr';
import IndecisionAppDescr from './IndecisionAppDescr';

const ProjectsPage = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
      <div className='description-box'>
        <p className='page-description'> Please Leave a comment! (its going to be able soon)</p>
      </div>
    </div>
    <div className='component-box-2-project first-project-box'>
      <NavLink to='/homepage/think-twice' rel="wobble-horizontal" className="wobble-horizontal">
        <ThinkTwiceDescr />
      </NavLink>
      <NavLink to="/homepage/indecision-app" rel="wobble-horizontal" className="wobble-horizontal">
        <IndecisionAppDescr />
      </NavLink>
      <NavLink to="/homepage/cat-poster-store" rel="wobble-horizontal" className="wobble-horizontal">
        <CatPosterStoreDescr />
      </NavLink>
    </div>
  </div>
);

export default ProjectsPage;
