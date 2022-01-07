import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {

    let params = useParams();
    return (
        <React.Fragment>
            <h2>{params.project}</h2>
            <p>Lorem ipsum</p>
        </React.Fragment>
    )

}

export default ProjectPage;