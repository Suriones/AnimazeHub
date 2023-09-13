import React from "react"
import commentsBlock_style from "./CommentsBlock.scss"

const CommentsBlock = (props) => {

    const text = React.createRef();

    const sendCommentToContainer = () => {
        props.data.addComment(text.current.value)
    }

    const listPagesForward = () => {
        props.data.CountPagesForward();
    }

    const listPagesBack = () => {
        props.data.CountPagesBack();
    }

    return <div>
        <div className={commentsBlock_style.commentsName}>
            <p className="h1">Comments</p>
        </div>

        <div className={commentsBlock_style.comments}>

            <div className={`form-group ${commentsBlock_style.comments}`}>
                <textarea value={props.data.inputText} disabled={!props.data.authStatus} ref={text} onChange={() => props.data.setInputText(text.current.value)} placeholder={props.data.placeholder} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div>
                <button type="button" disabled={!props.data.authStatus} onClick={sendCommentToContainer} className={`btn btn-success ${commentsBlock_style.sendButton}`}>Send</button>
            </div>

        </div>
        <div className={`card ${commentsBlock_style.comments}`} style={{ width: 18 + "rem" }}>
            <ul className="list-group list-group-flush">
                {props.data.comments}
            </ul>
        </div>

        <nav className={commentsBlock_style.commentsPages}>
            <ul className="pagination">
                <button className="page-item" id={commentsBlock_style.listPagesBack} disabled={props.data.actualCommentsPagesGroup <= 10 ? true : false} onClick={listPagesBack}><a className="page-link">Back</a></button>
                {props.data.commentsPagesActual}
                <button className="page-item" id={commentsBlock_style.listPagesForward} disabled={props.data.actualCommentsPagesGroup < props.data.commentsPagesCount ? false : true} onClick={listPagesForward}><a className="page-link">Forward</a></button>
            </ul>
        </nav>
    </div>
}

export default CommentsBlock;