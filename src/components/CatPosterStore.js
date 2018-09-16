import React from 'react';
import TabsComponent from './TabsComponent';
import { addComment }  from '../actions/addComment';


const CatPosterStore = () => (  
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
    </div>
    <div className='component-box-2-project first-project-box'>
      <div className='app-container'>
        <div>
          <p>
            Cat poster Store!!!!
          </p>
        </div>
        <a href="https://cat-poster-store.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="app-anchor">
          <div className='app-picture'>
            <img src="/images/cat.jpg" alt="cat-poster-store"/>
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

export default CatPosterStore;

// <a href="https://cat-poster-store.herokuapp.com/" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
//         <div className='app-picture'>
//          <img src="/images/cat.jpg" alt="Cat Poster Store"/>
//         </div>
//       </a>