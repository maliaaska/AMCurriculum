import React from 'react';
import { Link } from 'react-router-dom';
import LinksComponent from './LinksComponent';


const ProjectsPage = (props) => (
  <div className="component-box">
    <LinksComponent />
    <Link to="projects-page/1">Item One     </Link>
    <Link to="projects-page/2">Item Two     </Link>
    <Link to="projects-page/3">Item three </Link>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default ProjectsPage;


