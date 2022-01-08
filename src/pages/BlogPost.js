import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

const BlogPost = () => {

    let params = useParams();
    const article = articleContent.find(
        article => article.name === params.name
        );
    if(!article) return <h2>Article does not exist</h2>;
         
    return (
        <React.Fragment>
            <h2>{article.title}</h2>
            {article.content.map((paragraph,key) => (
                <p key={key}>{paragraph}</p>
                )
            )};
        </React.Fragment>
    )
}

export default BlogPost;