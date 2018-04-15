import React from 'react';
import LinksComponent from "./LinksComponent";

const ProfilePage = () => (
  <div className="component-box">
    <div className='component-box-1'>
      <LinksComponent />
      <div className='component-box-1-a'>
        <h3>My short story</h3>
        <p>
          Arkadiusz Szymon Milewski and was born 12 of May 1990 Warsaw, Poland.
          Currently lives in Amsterdam, The Netherlands.
          Born Traveller and Sportsman, since 2017 pssionated about programming.
          Did a course of Web Development Jun-August 2017 in Barcelona.
          Speaks fluent Polish, English, Spanish.
          Working as a freelancer and trying to enrich his service in Web Development industry.
        </p>
      </div>
    </div>
    <div className='component-box-2'>
      <h4>Contact details</h4>
      <p>
        e-mail: asmilewski@gmail.com
      </p>
      <div className="link-image">
        <a href="https://www.linkedin.com/in/arkadiusz-milewski-48977155/" target='_blank'>
          <img src="/images/linkedin.png" alt="linkedIn_logo"/>
          <span>My LinkedIn profile</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProfilePage;


// <p>
//         GitHub: https://github.com/maliaaska
//       </p>