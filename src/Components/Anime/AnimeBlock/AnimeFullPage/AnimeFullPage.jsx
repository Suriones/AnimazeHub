import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";

const AnimeFullPage = (props) => {

    const text = React.createRef();

    const sendToContainer = () => { props.data.addComment(text.current.value, props.data.animeID) }
    const sendValueInput = () => { props.data.setNewInputText(text.current.value) }

    if (props.data === undefined) {
        return (<div className={animeFullPage_style.anime}><span className={animeFullPage_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={animeFullPage_style.anime}>

                <div className={animeFullPage_style.preview}>

                    <div className={animeFullPage_style.picture}>
                        <img src={props.data.animeData.img}></img>
                    </div>

                    <div className={animeFullPage_style.information}>

                        <div className={animeFullPage_style.name}>
                            <h1>{props.data.animeData.name}</h1>
                        </div>

                        <div className={animeFullPage_style.description}>
                            {props.data.animeData.description}
                        </div>

                        <div className={animeFullPage_style.video}>
                            {/* <iframe width="640" height="360" src={props.data.animeData.trailer} allowFullScreen></iframe> */}
                        </div>

                    </div>
                </div>

                <hr />
                <div className={animeFullPage_style.commentsJustWord}>
                    <h1>Коментарі</h1>
                </div>

                <div className={animeFullPage_style.comments}>
                    <div className={animeFullPage_style.textArea}>
                        <textarea value={props.data.inputText} ref={text} onChange={sendValueInput} name="textarea"></textarea>
                    </div>

                    <div className={animeFullPage_style.sendButton}>
                        <button onClick={sendToContainer}>Відправити</button>
                    </div>

                </div>
                {props.data.commentsComponents}

                {props.data.commentsPages.map(p => {
                    return <span key={p.key} className={props.data.activePage == p.key ? animeFullPage_style.active : null}>{p}</span>
                })}
            </div>
        );
    }
}

export default AnimeFullPage;
