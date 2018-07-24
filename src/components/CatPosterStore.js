import React from 'react';
import TabsComponent from './TabsComponent';
import { removeItemButton } from '../actions/addComment';
import { CatPosterComment } from '../actions/addComment';


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
      <div>
        <ul id='ul-cat'>
          This is ul
        </ul>
        <input type="text" id='input'></input>
        <button id='add-comment-button' onClick={ CatPosterComment } >Add Comment</button>
      </div>
    </div>
  </div>
);

export default CatPosterStore;

// <a href="https://cat-poster-store.herokuapp.com/" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
// </a>