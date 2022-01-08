import React from 'react';
import { useParams } from 'react-router-dom';
import projectContent from './projects-content';

const ProjectPage = () => {

    let params = useParams();
    const project = projectContent.find(
        project => project.name === params.name
    );
    if(!project) return <h2>Project does not exist</h2>;

    return (
        <React.Fragment>
            <h2>{project.title}</h2>
            {project.content.map((paragraph,key) => (<p key={key}>{paragraph}</p>))}
        </React.Fragment>
    )

}

export default ProjectPage;