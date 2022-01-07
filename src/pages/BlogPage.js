import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogPage = () => (
    <React.Fragment>
        <h1>Blog</h1>
        <Outlet />
    </React.Fragment>
)

export default BlogPage;