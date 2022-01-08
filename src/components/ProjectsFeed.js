import React from "react";
import { Link } from 'react-router-dom';
import projects from "../pages/projects-content";

const ProjectsFeed = () => (
    <>
        {projects.map((project,key) => (
            <Link key={key} to={`/work/${project.name}`}>
                <h3>{project.title}</h3>
                <p>{project.content[0].substring(0,150)}...</p>
            </Link>
        ))}
    </>
);

export default ProjectsFeed;