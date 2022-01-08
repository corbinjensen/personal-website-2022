import React from 'react';
import BlogFeed from '../components/BlogFeed';
import articleContent from './article-content';


const BlogPage = () => (
    <React.Fragment>
        <h1>Blog</h1>
        <BlogFeed articles={articleContent} />
    </React.Fragment>
)

export default BlogPage;