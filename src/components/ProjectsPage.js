import React from 'react';
import { Link } from 'react-router-dom';
import LinksComponent from './LinksComponent';
import Footer from './Footer';

const ProjectsPage = (props) => (
  <div className="component-box">
    <div className='component-box-1'>
      <LinksComponent />
      <p>These are my projects i have made. Do not hesitate to take a look and leave a comment!</p>
    </div>
    <div className='component-box-2'>
      <a href="https://react-thinktwiceapp.herokuapp.com/" target='_blank'>
        <div>
          <h3>ThinkTwiceApp</h3>
          <div className='app-picture'>
            <img src="/images/money.png" alt="ThinkTwiceImg"/>
          </div>
          <p>
            ThinkTwiceApp has been built with React. It is an app what helps you track you all you expenses you have made. 
            App allows you to Log in with you Gmail what creates your individual, unique account.
          </p>
        </div>  
      </a>

      <a href="https://indecision-app-mil.herokuapp.com/" target='_blank'>
        <div>
          <h3>IndecisionApp</h3>
          <div className='app-picture'>
            <img src="/images/light.png" alt="IndecisionAppImage"/>
          </div>
          <p>
          IndecisionApp has been built with React.js.
          It is a simple app that helps you to make a decision in case you are not sure what to do. 
          </p>
        </div>
      </a>
      <a href="https://cat-poster-store.herokuapp.com/" target="_blank" >
        <div>
          <h3>Cat Poster Store</h3>
          <div className='app-picture'>
            <img src="/images/cat.jpg" alt="Cat Poster Store"/>
          </div>
          <p>
            The "Cat Poster Store" is a e-store where you can choose your favorite postcard with a Cat. When you click a button popup a random text in the viewChild!
          </p>
        </div>
      </a>
    </div>
  </div>
);

export default ProjectsPage;
