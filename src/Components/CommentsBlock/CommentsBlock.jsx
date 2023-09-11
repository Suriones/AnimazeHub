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
            <h1>Коментарі</h1>
        </div>

        <div className={commentsBlock_style.comments}>

            <div className={commentsBlock_style.textArea}>
                <textarea id="textAreaComment" value={props.data.inputText} disabled={!props.data.authStatus} ref={text} onChange={() => props.data.setInputText(text.current.value)} placeholder={props.data.placeholder}></textarea>
            </div>

            <div>
                <button id="buttonComment" disabled={!props.data.authStatus} onClick={sendCommentToContainer}>Відправити</button>
            </div>

        </div>
        {props.data.comments}
        <div className={commentsBlock_style.commentsPages}>{props.data.commentsPagesActual}</div>
        <div className={commentsBlock_style.buttonListPages}>
            <button id={commentsBlock_style.listPagesBack} disabled={props.data.actualCommentsPagesGroup <= 10 ? true : false} onClick={listPagesBack}>Назад</button>
            <button id={commentsBlock_style.listPagesForward} disabled={props.data.actualCommentsPagesGroup < props.data.commentsPagesCount ? false : true} onClick={listPagesForward}>Вперед</button>
        </div>


    </div>
}

export default CommentsBlock;