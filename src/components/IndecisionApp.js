import React from 'react';
import TabsComponent from './TabsComponent';

const IndecisionApp = () => (
  
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      This is from the IndecisionApp component!
      <div className='app-picture'>
        <img src="/images/light.png" alt="IndecisionAppImage"/>
      </div>  
    </div>
  </div>
);

export default IndecisionApp;

// <a href="https://indecision-app-mil.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="wobble-horizontal">
// </a>
