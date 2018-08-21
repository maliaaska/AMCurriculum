import React from 'react';
import TabsComponent from './TabsComponent';
import { addComment } from '../actions/addComment';

const ThinkTwice = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      <div>
        <h2>
          This is from the Think twice component!
        </h2>
      </div>
      <div className='app-picture'>
        <img src="/images/money.png" alt="ThinkTwiceImg" id='think-twice-icon'/>
      </div>
      <div className='list'>
        <ul>
        </ul>
        <input type="text" className='addItemInput'></input>
        <button className='addItemButton' onClick= { addComment } >Add Comment</button>
        <div id='content'></div>
      </div>
    </div>
  </div>
);

export default ThinkTwice;

// <a href="https://react-thinktwiceapp.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="wobble-horizontal">
// </a>
