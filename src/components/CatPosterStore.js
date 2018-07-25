import React from 'react';
import TabsComponent from './TabsComponent';
import { addComment }  from '../actions/addComment';


const CatPosterStore = () => (  
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      This is from the Cat poster Store
      <a href="https://cat-poster-store.herokuapp.com/" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
        <div className='app-picture'>
         <img src="/images/cat.jpg" alt="Cat Poster Store"/>
        </div>
      </a>
      <div className='list'>
        <ul>
        </ul>
        <input type="text" className='addItemInput'></input>
        <button className='addItemButton' onClick= { addComment } >Add Comment</button>
      </div>
    </div>
  </div>
);

export default CatPosterStore;

