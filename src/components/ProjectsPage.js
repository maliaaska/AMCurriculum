import React from 'react';
import { Link } from 'react-router-dom';
import TabsComponent from './TabsComponent';
import Footer from './Footer';

const ProjectsPage = (props) => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
      <p className='page-description'>These are my projects i have made. Do not hesitate to take a look and leave a comment!</p>
    </div>
    <div className='component-box-2-project'>
      <a href="https://react-thinktwiceapp.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="wobble-horizontal">
        <div className='project-box'>
          <div className='app-description'>
            <h5>ThinkTwiceApp</h5>
            <p>
              ThinkTwiceApp has been built with React. It is an app what helps you track you all you expenses you have made. 
              App allows you to Log in with you Gmail what creates your individual, unique account.
            </p>
          </div>
          <div className='app-picture'>
            <img src="/images/money.png" alt="ThinkTwiceImg" id='think-twice-icon'/>
          </div>
        </div>  
      </a>
      <a href="https://indecision-app-mil.herokuapp.com/" target='_blank' rel="wobble-horizontal" className="wobble-horizontal">
        <div className='project-box'>
          <div className='app-description'>
            <h5>IndecisionApp</h5>           
            <p>
              IndecisionApp has been built with React.js.
              It is a simple app that helps you to make a decision in case you are not sure what to do. 
            </p>
          </div>
          <div className='app-picture'>
            <img src="/images/light.png" alt="IndecisionAppImage"/>
          </div>          
        </div>
      </a>
      <a href="https://cat-poster-store.herokuapp.com/" target="_blank" rel="wobble-horizontal" className="wobble-horizontal">
        <div className='project-box'>
          <div className='app-description'>
            <h5>Cat Poster Store</h5>           
            <p>
              The "Cat Poster Store" is a e-store where you can choose your favorite postcard with a Cat. When you click a button popup a random text in the viewChild!
            </p>
          </div>
          <div className='app-picture'>
            <img src="/images/cat.jpg" alt="Cat Poster Store"/>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default ProjectsPage;
