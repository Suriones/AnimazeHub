import React from "react";
import comment_style from "./Comment.scss";

const Comment = React.memo((props) => {
    return (
        <div className={comment_style.comment}>
            <p>{props.text}</p>
        </div>
    )
})

export default Comment;