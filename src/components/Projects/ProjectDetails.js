import React from 'react';

function ProjectDetails({ match }) {
  const { id } = match.params;

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-action gret lighten-4 grey-text'>
          <div>Posted by Siarhei</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
