import React from "react";
import { Link } from 'react-router-dom';
import articles from "../pages/article-content";

const BlogFeed = () => (
    <>
        {articles.map((article,key) => (
            <Link key={key} to={`/blog/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        ))}
    </>
);

export default BlogFeed;