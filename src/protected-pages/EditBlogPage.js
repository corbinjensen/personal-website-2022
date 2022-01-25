/* 
    Represents a form in order to create, update, edit, or remove blog posts.
*/

import React from "react";

const EditBlogPage = () => (
    <>
        <h2>Edit Blog</h2>
        <form>
            <label>
                Title
                <input type="text" name="title" />
            </label>
            <label>
                Content
                <input type="text" name="content" />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </>
)

export default EditBlogPage;