import React from "react"
import commentPage_s from "./CommentPage.module.scss"

const CommentPage = (props) => {
    return <div className={`${props.className} ${commentPage_s.commentPage}`} onClick={() => {props.onClick(props.number)}}>
        <a>{props.number}</a>
    </div>
}

export default CommentPage;