import React from 'react';
import TabsComponent from './TabsComponent';
import Footer from './Footer';


const HomePage = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
      <div className='description-box'>
        <h2>Welcome!</h2>
        <p className='page-description'> 
          That's my Resume built with React.js.
          The Reason why I did it is simple- to practice how to build 
          websites with React.js. 
          I enjoyed a lot so far working with this amazing framework. 
          In a projects section you can find some projects I have made lastly.
        </p>
      </div>
    </div>
    <div className='component-box-2'>
      <div className='explenation-box'>
        <h3>IMPORTANT!!!</h3>  
        <p>
            You are enjoying version BETA of the ASResume.
          in the near future I will be working more and more on the website,
          implementing new feature and projects.

          The reasons why I have not waited until I have final version:
          <br></br>
          <br></br>
          1. They say the website is never done.
          <br></br>
          2. I was feeling that I am always far from uploading final version 
             What was demotivating me. 
          <br></br>
          3. Realized that I have a lot of ideas and it is just imposible to do 
             all things at once so I decided it is going to be better if I start sharing my results
             even though the AMResume is not done yet.
        </p>
        <h3>ENJOY!!!</h3>
      </div>
    </div>
  </div>
);
export default HomePage;