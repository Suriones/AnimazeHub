import React from "react";
import comment_style from "./Comment.scss";

const Comment = React.memo((props) => {
    return (
        <div className={comment_style.comment}>
            <li className="list-group-item">{props.text}</li>
        </div>
    )
})

export default Comment;