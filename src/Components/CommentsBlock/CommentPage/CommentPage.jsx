import React from "react"

const CommentPage = React.memo((props) => {
    return <button className={`page-item ${props.className}`} onClick={props.showAnimeIdActiveCommentsPage}>
        <a className="page-link">{props.id}</a>
    </button>
})

export default CommentPage;