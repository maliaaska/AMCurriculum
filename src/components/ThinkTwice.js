import React from 'react';
import TabsComponent from './TabsComponent';
import { addComment } from '../actions/addComment';

const ThinkTwice = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      <div className='app-container'>
        <div>
          <p>
            This is from the Think twice component!
          </p>
        </div>
        <a href="https://react-thinktwiceapp.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="app-anchor">
          <div className='app-picture'>
            <img src="/images/money.png" alt="ThinkTwiceImg" id='think-twice-icon'/>
          </div>
        </a>
        <div className='list'>
          <ul>
          </ul>
            <input type="text" className='addItemInput'></input>
            <button className='addItemButton' onClick= { addComment } >Add Comment</button>
          <div id='content'></div>
        </div>
      </div>
    </div>
  </div>
);

export default ThinkTwice;


