import React from "react"
import commentsBlock_s from "./CommentsBlock_style.module.scss"

const CommentsBlock = (props) => {

    return <div className={commentsBlock_s.commentsComponent}>
        <div className={commentsBlock_s.commentsBlock}>

            <div className={commentsBlock_s.addCommentsBlock}>
                <textarea value={props.data.valueOfTheCommentAddingField} disabled={props.data.addCommentStatus} ref={props.data.commentField} onChange={() => props.data.setValueOfTheCommentAddingField(props.data.commentField.current.value)} placeholder={props.data.placeholder} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button disabled={props.data.addCommentStatus} onClick={() => props.data.postComment(props.data.commentField.current.value)}>Send</button>
            </div>

            <div className={commentsBlock_s.visibleComments}>
                {props.data.visibleComments}
            </div>

            <nav className={commentsBlock_s.commentsPages}>
                <button id={commentsBlock_s.listPagesBack} disabled={props.data.backButtonStatus} onClick={() => props.data.pagesBack()}><a>Back</a></button>
                {props.data.visiblePages}
                <button id={commentsBlock_s.listPagesForward} disabled={props.data.forwardButtonStatus} onClick={() => props.data.pagesForward()}><a>Forward</a></button>
            </nav>
        </div>
    </div>
}

export default CommentsBlock;