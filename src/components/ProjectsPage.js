import React from 'react';

const ProjectsPage = (props) => (
  <div>
    <h3>ThinkTwiceApp!</h3>
    <p>Space for a small image of the ThinkTwiceApp</p>
    <p>Description of the ThinkTwiceApp!</p>
    <p>This page is for the item with the id of {props.match.params.id}</p>
  </div>
);

export default ProjectsPage;