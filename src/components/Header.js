import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header__content">
      <Link className="header__title" to="/homepage">
        <img src="/images/favicon.png" alt="logo" className="logo"/>
        <p>
          Resume Arkadiusz Milewski
        </p>
      </Link> 
      <button className="button button--link" onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({ 
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
