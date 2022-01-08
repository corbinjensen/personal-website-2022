import React from 'react';
import ProjectsFeed from '../components/ProjectsFeed';
import projectContent from './projects-content';

const ProjectsPage = () => (
    <React.Fragment>
        <h1>Work</h1>
        <ProjectsFeed projects={projectContent}/>
    </React.Fragment>
)

export default ProjectsPage;