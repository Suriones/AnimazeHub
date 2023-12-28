import React from "react";
import comment_s from "./Comment.module.scss";

const Comment = (props) => {
    return (
        <div className={comment_s.comment}>
            <div className={comment_s.commentBody}>
                <span className={comment_s.username} onClick={() => props.mention(props.username)}>{props.username}: </span> {props.text}
                <div className={comment_s.date}>{props.time}</div>
            </div>

        </div>
    )
}

export default Comment;