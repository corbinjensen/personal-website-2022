import React from 'react';
import { Outlet } from 'react-router-dom';

const ProjectsPage = () => (
    <React.Fragment>
        <h1>Work</h1>
        <Outlet />
    </React.Fragment>
)

export default ProjectsPage;