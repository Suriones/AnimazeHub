import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentsAPI } from "../../../../Redux/API/api";
import AnimeFullPage from "./AnimeFullPage";
import animeFullPage_style from "./AnimeFullPage.scss";
import Comment from "./Comments/Comment";


const AnimeFullPageContainer = (props) => {

    const animeID = parseInt(Object.values(useParams()));

    useEffect(() => {
        commentsAPI.getAnimeCountComments(animeID).then(count => {
            props.dispatch({ type: "setCommentsLength", commentsLength: count });
        })
    }, [props.commentsData.checkerUpdate]);

    useEffect(() => {
        commentsAPI.showFirstCommentsPage(animeID).then(data => {
            props.dispatch({ type: "setStateCommentsData", newState: data });
            props.dispatch({ type: "setActivePage", activePage: 1 });
        })
    }, []);

    if (props.animeData.anime[animeID] === undefined) {
        return (<AnimeFullPage />);
    } else {

        const setNewInputText = (value) => {
            props.dispatch({ type: "setNewInputText", value: value });
        }

        const scrollDown = () => {
            window.scrollTo(0, 9999);
        }

        const showActiveCommentsPage = (selectedPage) => {
            commentsAPI.showActiveCommentsPage(selectedPage.target.id, animeID).then(data => {
                props.dispatch({ type: "setStateCommentsData", newState: data });
                props.dispatch({ type: "setActivePage", activePage: selectedPage.target.id });
                setTimeout(scrollDown, 80);
            });
        };

        const addComment = (text, animeID) => {
            if (text !== "") {
                commentsAPI.addCommentToAnimePage(text, animeID).then(function () {
                    commentsAPI.showLastCommentsPage(animeID).then(response => {
                        props.dispatch({ type: "setActivePage", activePage: response.activePage });
                        props.dispatch({ type: "setStateCommentsData", newState: response.data });
                        props.dispatch({ type: "clearInputText" });
                        props.dispatch({ type: "changedDBComments" });
                        setTimeout(scrollDown, 80);
                    })
                })
            } else {alert("Пусте поле коментарів!")}

        };

        //--- Додавання комментарів і сторінок комментарів
        let commentsComponents = props.commentsData.comments.map(c => <Comment text={c.text} key={c.id} />);

        let commentsPagesCount = Math.ceil(props.commentsData.commentsLength / 5);
        let commentsPages = [];

        for (let i = 1; i < commentsPagesCount + 1; i++) {
            commentsPages.push(<span key={i} id={i} className={animeFullPage_style.commentsPages} onClick={showActiveCommentsPage}>{i} </span>);
        }
        //---

        const data = {
            animeData: props.animeData.anime[animeID],
            inputText: props.animeData.inputText,
            animeID: animeID,
            commentsComponents: commentsComponents,
            activePage: props.commentsData.activePage,
            commentsPages: commentsPages,
            addComment: addComment,
            setNewInputText: setNewInputText
        }

        return (<AnimeFullPage data={data} />);
    }
}

export default AnimeFullPageContainer;
