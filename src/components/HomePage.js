import React from 'react';
import LinksComponent from './LinksComponent';
import Footer from './Footer';


const HomePage = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <LinksComponent />
      <h1>Welcome!</h1>
      <p className="home-page-paragraph"> 
        That's my Resume built with React.js.
        The Reason why I did it is simple- to practice how to build 
        websites with React.js. 
        I enjoyed a lot so far working with this amazing framework. 
        In a projects section you can find some projects I have made lastly.
      </p>
    </div>
    <div className='component-box-2'>
      <p>This is box 2</p>
    </div>
  </div>
);
export default HomePage;