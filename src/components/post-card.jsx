import React from "react";
import {Link} from 'react-router-dom';
function PostCard(post) {
    return (
        <>
            <div className="post-preview">
                <Link to={'/post/' + post.prop.title}>
                    <h2 className="post-title">
                        {post.prop.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {post.prop.body}
                    </h3>
                </Link>
                <p className="post-meta">
                    Posted by <a href="/">Start Bootstrap</a> on {post.prop.createdAt}
                </p>
            </div>
            <hr />
        </>
    )
}
export default PostCard;