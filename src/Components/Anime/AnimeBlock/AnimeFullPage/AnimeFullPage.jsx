import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";
import Comment from "./Comments/Comment";

const AnimeFullPage = (props) => {

    const commentsComponents = props.animeData[0].comments.map(c => <Comment text={c.text} key={c.id} />);

    const newCommentElement = React.createRef();
    const send = () => {
        props.dispatch({ type: "addComment", text: newCommentElement.current.value });
    }

    return (
        <div className={animeFullPage_style.anime}>

            <h1>{props.animeData[0].name}</h1>

            <div className={animeFullPage_style.textArea}>
                <textarea ref={newCommentElement}></textarea>
            </div>

            <div className={animeFullPage_style.sendButton}>
                <button onClick={send}>Відправити</button>
            </div>

            {commentsComponents}
        </div>
    );
}

export default AnimeFullPage;
