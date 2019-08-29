import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = ({ auth, profile }) => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          ReactFirebase
        </Link>
        {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log('current State - ', state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
