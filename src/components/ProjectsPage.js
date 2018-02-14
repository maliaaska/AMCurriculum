import React from 'react';
import { Link } from 'react-router-dom';
import LinksComponent from './LinksComponent';


const ProjectsPage = (props) => (
  <div className="component-box">
    <Link to="projects-page/1">
      <div>
        <h3>ThinkTwiceApp</h3>
        <div>
          <img src="" alt="ThinkTwiceImg"/>
        </div>
        <p>
          description of Think Twice app
        </p>
      </div>
    </Link>

    <Link to="projects-page/2">
      <div>
        <h3>IndecisionApp</h3>
        <div>
          <img src="" alt="IndecisionAppImage"/>
        </div>
        <p>
          description of IndecisionApp
        </p>
      </div>
    </Link>

    <Link to="projects-page/3">
      <div>
        <h3>ThinkTwiceApp</h3>
        <div>
          <img src="" alt="WeatherApp"/>
        </div>
        <p>
          description of the WeatherApp
        </p>
      </div>
    </Link>
    <Link to="projects-page/4">
      <div>
        <h3>Cat Poster Store</h3>
        <div>
          <img src="" alt="Cat Poster Store"/>
        </div>
        <p>
          description of the Cat Poster Store
        </p>
      </div>
  </Link>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default ProjectsPage;


