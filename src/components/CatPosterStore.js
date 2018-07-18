import React from 'react';
import TabsComponent from './TabsComponent';

const CatPosterStore = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      This is from the Cat poster Store
      <div className='app-picture'>
        <img src="/images/cat.jpg" alt="Cat Poster Store"/>
      </div>
    </div>
  </div>
);

export default CatPosterStore;

// <a href="https://cat-poster-store.herokuapp.com/" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
// </a>