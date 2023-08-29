import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";

const AnimeFullPage = (props) => {

    const newCommentElement = React.createRef();
    const send = () => { props.send(newCommentElement.current.value, props.id); }

    return (
        <div className={animeFullPage_style.anime}>

            <h1>{props.name}</h1>

            <div className={animeFullPage_style.textArea}>
                <textarea ref={newCommentElement} name="textarea"></textarea>
            </div>

            <div className={animeFullPage_style.sendButton}>
                <button onClick={send}>Відправити</button>
            </div>
                {props.commentsComponents}
        </div>
    );
}

export default AnimeFullPage;
