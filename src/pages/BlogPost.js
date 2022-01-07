import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {

    let params = useParams();
    return (
        <React.Fragment>
            <h1>{params.name}</h1>
            <p>Lorem ipsum</p>
        </React.Fragment>
    )
}

export default BlogPost;