import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeFullPage from "./AnimeFullPage";
import animeFullPage_style from "./AnimeFullPage.scss";


const AnimeFullPageContainer = (props) => {

    const animeID = parseInt(Object.values(useParams()));

    useEffect(() => {
        props.dispatch(props.commentsBLL.getAnimeIdCountComments(animeID));
    }, [props.commentsData.checkerUpdate]);

    useEffect(() => {
        props.dispatch(props.commentsBLL.showAnimeIdFirstCommentsPage(animeID));
    }, []);

    if (props.animeData.anime[animeID] === undefined) {
        return (<AnimeFullPage />);
    } else {

        const setNewInputText = (value) => {
            props.dispatch({ type: "setNewInputText", value: value });
        }

        const showAnimeIdActiveCommentsPage = (selectedPage) => {
            props.dispatch(props.commentsBLL.showAnimeIdActiveCommentsPage(selectedPage, animeID));
        };

        const addComment = (text, animeID) => {
            props.dispatch(props.commentsBLL.addCommentToAnimePage(text, animeID));
        };

        //--- Створювання сторінок комментарів
        let commentsPagesCount = Math.ceil(props.commentsData.commentsLength / 5);
        let commentsPages = [];

        for (let i = 1; i < commentsPagesCount + 1; i++) {
            commentsPages.push(<span key={i} id={i} className={animeFullPage_style.commentsPages} onClick={showAnimeIdActiveCommentsPage}>{i} </span>);
        }
        //---

        const data = {
            animeData: props.animeData.anime[animeID],
            inputText: props.animeData.inputText,
            animeID: animeID,
            commentsComponents: props.commentsData.comments,
            activePage: props.commentsData.activePage,
            commentsPages: commentsPages,
            addComment: addComment,
            setNewInputText: setNewInputText
        }

        return (<AnimeFullPage data={data} />);
    }
}

export default AnimeFullPageContainer;
