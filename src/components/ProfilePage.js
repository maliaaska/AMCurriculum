import React from 'react';
import TabsComponent from "./TabsComponent";

const ProfilePage = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <TabsComponent />
      <div className='description-box'>
        <h3>My short story</h3>
        <p className='page-description'>
          Arkadiusz Szymon Milewski was born 12 of May 1990 Warsaw, Poland.
          Currently lives in Amsterdam, The Netherlands.
          Born Traveller and Sportsman, since second half of 2016 pssionated about programming.
          Did a course of Web Development Jun-August 2017 in Barcelona.
          Speaks fluent Polish, English, Spanish.
          Working as a freelancer and trying to enrich his service in Web Development industry.
        </p>
      </div>
    </div>
    <div className='component-box-2'>
      <div className='box-contact'>
        <h2>Contact details</h2>
        <div className="link-image">
          <a href="mailto:asmilewski@gmail.com" target='_blank'>
            <img src="/images/gmail.png" alt="Gmail_logo"/>
            <div>
              <p>
                asmilewski@gmail.com
              </p>
            </div>
          </a>
        </div>
        <div className="link-image">
          <a href="https://www.linkedin.com/in/arkadiusz-milewski-48977155/" target='_blank'>
            <img src="/images/linkedin.png" alt="linkedIn_logo"/>
            <div>
            <p>
              My LinkedIn profile
            </p>
            </div>
          </a>
        </div>
        <div className="link-image">
          <a href="https://github.com/maliaaska" target='_blank'>
            <img src="/images/github.png" alt="GitHub_logo"/>
            <div>
            <p>
              My GitHub profile
            </p> 
            </div>
          </a>
        </div>
      </div>
    </div>
    
  </div>
);

export default ProfilePage;
  