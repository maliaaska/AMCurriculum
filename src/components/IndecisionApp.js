import React from 'react';
import TabsComponent from './TabsComponent';
import { addComment } from '../actions/addComment';
const IndecisionApp = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      <div className='app-container'>
        <div>
          <p>
            IndecisionApp!!!!
          </p>
        </div>
        <a href="https://indecision-app-mil.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="app-anchor">
          <div className='app-picture'>
            <img src="/images/light.png" alt="IndecisionAppImage"/>
          </div>
        </a>
        <div className='list'>
          <ul className='app-ul'>
          </ul>
          <input type="text" className='input'></input>
          <button className='addItemButton' onClick= { addComment } >Add Comment</button>
          <p className='warning'></p>
        </div>
      </div>
    </div>
  </div>
);

export default IndecisionApp;

// <a href="https://indecision-app-mil.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="wobble-horizontal">
// </a>

// <div className='app-picture'>
//         <img src="/images/light.png" alt="IndecisionAppImage"/>
//       </div> 
