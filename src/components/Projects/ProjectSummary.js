import React from 'react';

const ProjectSummary = ({ project }) => {
  console.log(project.createdAt.toDate());
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>{`Posted by the ${project.authorFirstName} ${project.authorLastName}`}</p>
        <p className='grey-text'>
          {project.createdAt
            .toDate()
            .toString()
            .slice(4, 21)}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
