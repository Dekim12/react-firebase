import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails({ project }) {
  if (!project) {
    return (
      <div className='container center'>
        <p>Loading project...</p>
      </div>
    );
  }

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className='card-action gret lighten-4 grey-text'>
          <div>{`Posted by ${project.authorFirstName} ${project.authorLastName}`}</div>
          <div>12pm</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const currentProject = projects ? projects[id] : null;

  return {
    project: currentProject,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
