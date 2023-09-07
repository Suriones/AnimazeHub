import React from "react"
import commentPage_style from "./CommentPage.scss"

const CommentPage = (props) => {
    return <span className={props.className + " " + commentPage_style.commentPage} onClick={props.showAnimeIdActiveCommentsPage}>{props.id}</span>
}

export default CommentPage;