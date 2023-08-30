import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";

const AnimeFullPage = (props) => {

    const newCommentElement = React.createRef();
    const scroll = () => {
        window.scrollTo(0, 9999);
    }
    const send = () => { props.send(newCommentElement.current.value, props.id); setTimeout(scroll, 50); }


    if (props.commentsComponents === undefined) {
        return (<div className={animeFullPage_style.anime}><span className={animeFullPage_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={animeFullPage_style.anime}>

                <div className={animeFullPage_style.preview}>

                    <div className={animeFullPage_style.picture}>
                        <img src={props.animeData.img}></img>
                    </div>

                    <div className={animeFullPage_style.information}>

                        <div className={animeFullPage_style.name}>
                            <h1>{props.animeData.name}</h1>
                        </div>

                        <div className={animeFullPage_style.description}>
                            {props.animeData.description}
                        </div>

                        <div className={animeFullPage_style.video}>
                            <iframe width="640" height="360" src={props.animeData.trailer} allowFullScreen></iframe>
                        </div>

                    </div>
                </div>

                <hr />
                <div className={animeFullPage_style.commentsWord}>
                    <h1>Коментарі</h1>
                </div>

                <div className={animeFullPage_style.comments}>
                    <div className={animeFullPage_style.textArea}>
                        <textarea ref={newCommentElement} name="textarea"></textarea>
                    </div>

                    <div className={animeFullPage_style.sendButton}>
                        <button onClick={send}>Відправити</button>
                    </div>

                </div>
                {props.commentsComponents}
            </div>
        );
    }
}

export default AnimeFullPage;
