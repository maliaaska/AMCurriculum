import React from 'react';
import { Link } from 'react-router-dom'
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
      <Link to='/homepage/think-twice' target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
        <ThinkTwiceDescr />
      </Link>
      <Link to="/homepage/indecision-app" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
        <IndecisionAppDescr />
      </Link>
      <Link to="/homepage/cat-poster-store" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
        <CatPosterStoreDescr />
      </Link>
    </div>
  </div>
);

export default ProjectsPage;
