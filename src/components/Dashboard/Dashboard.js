import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './Notification';
import ProjectList from '../Projects/ProjectList';

class Dashboard extends Component {
  state = {};

  render() {
    const { projects } = this.props;

    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5'>
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.project.projects,
});

export default connect(mapStateToProps)(Dashboard);
