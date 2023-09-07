import React from "react"
import commentsBlock_style from "./CommentsBlock.scss"

const CommentsBlock = (props) => {

    const text = React.createRef();

    const sendCommentToContainer = () => {
        props.data.addComment(text.current.value)
    }

    return <div>
        <div className={commentsBlock_style.commentsName}>
            <h1>Коментарі</h1>
        </div>

        <div className={commentsBlock_style.comments}>
            <div className={commentsBlock_style.textArea}>
                <textarea value={props.data.inputText} ref={text} onChange={() => props.data.setInputText(text.current.value)} placeholder="Введіть комментар"></textarea>
            </div>

            <div>
                <button onClick={sendCommentToContainer}>Відправити</button>
            </div>

        </div>
        {props.data.comments}
        <div className={commentsBlock_style.commentsPages}>{props.data.commentsPages}</div>
    </div>
}

export default CommentsBlock;