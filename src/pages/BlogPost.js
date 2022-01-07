import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {

    let params = useParams();
    return (
        <React.Fragment>
            <h2>{params.name}</h2>
            <p>Lorem ipsum</p>
        </React.Fragment>
    )
}

export default BlogPost;