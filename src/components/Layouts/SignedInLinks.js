import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOutForUser, profile }) => {
  console.log(profile);
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <a onClick={signOutForUser}>Log Out</a>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mupDispatchToProps = dispatch => ({
  signOutForUser: () => dispatch(signOut()),
});

export default connect(
  null,
  mupDispatchToProps
)(SignedInLinks);
