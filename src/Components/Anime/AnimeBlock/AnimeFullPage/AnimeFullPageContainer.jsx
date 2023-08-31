import React, { useState } from "react";
import Comment from "./Comments/Comment";
import AnimeFullPage from "./AnimeFullPage";
import animeFullPage_style from "./AnimeFullPage.scss";

const AnimeFullPageContainer = (props) => {

    const id = parseInt(window.location.href.replace("http://localhost:3000/anime/", ""));

    if (props.animeData[id] !== undefined) {

        const send = (text, id) => { //Не можу придумати, як перекидати на останню сторінку при додаванні коммента
            props.dispatch({ type: "addComment", text: text, id: id });
        }

        let [pageComments, newCommentVisible] = useState(5);
        let commentsComponents = [];

        const pageCountRight = () => {
            if (props.animeData[id].comments[pageComments] !== undefined) {
                newCommentVisible(pageComments + 5);
            }
        }

        let pagesCommentsCount = Math.ceil(props.animeData[id].comments.length / 5);
        let pagesCommentsCountComponents = [];

        for (let i = 0; i < pagesCommentsCount; i++) { //Не можу придумати як зчитати, на яку цифру нажав користувач
            pagesCommentsCountComponents.push(<span className={animeFullPage_style.pageCountRight} onClick={pageCountRight}> {i + 1} </span>); //Не можу придумати як розмалювати нажату цифру
        }

        for (let i = pageComments - 5; i < pageComments; i++) {
            if (props.animeData[id].comments[i] !== undefined) {
                commentsComponents.push(<Comment text={props.animeData[id].comments[i].text} key={props.animeData[id].comments[i].id} />);
            }
        }

        return (<AnimeFullPage animeData={props.animeData[id]} send={send} commentsComponents={commentsComponents} id={id} key={id} pagesCommentsCountComponents={pagesCommentsCountComponents} />);
    } else {
        return (<AnimeFullPage key={id} />);
    }
}

export default AnimeFullPageContainer;
