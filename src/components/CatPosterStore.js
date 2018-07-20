import React from 'react';
import TabsComponent from './TabsComponent';

const CatPosterComment = () => {
  const ul = document.getElementById('ul-cat');
  let li = document.createElement('LI');
  const input = document.getElementById('input');
  const liValue = document.getElementById('input').value;
  li.appendChild(document.createTextNode(liValue));
  input.value = '';
  ul.appendChild(li);
}

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