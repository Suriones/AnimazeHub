import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentsAPI } from "../../../../Redux/API/api";
import AnimeFullPage from "./AnimeFullPage";
import animeFullPage_style from "./AnimeFullPage.scss";
import Comment from "./Comments/Comment";


const AnimeFullPageContainer = (props) => {

    const animeID = parseInt(Object.values(useParams()));

    useEffect(() => {
        commentsAPI.getCountComments(animeID).then(count => {
            props.dispatch({ type: "setCommentsLength", commentsLength: count });
        })
    }, [props.commentsData.checkerUpdate]);

    useEffect(() => {
        commentsAPI.showFirstCommentsPage(animeID).then(data => {
            props.dispatch({ type: "setStateCommentsData", newState: data });
            props.dispatch({ type: "setActivePage", activePage: 1})
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

        const showClickCommentsPage = (selectedPage) => {
            commentsAPI.showClickCommentsPage(selectedPage.target.id, animeID).then(data => {
                props.dispatch({ type: "setStateCommentsData", newState: data });
                props.dispatch({ type: "setActivePage", activePage: selectedPage.target.id})
            });
            setTimeout(scrollDown, 80);
        };

        const addComment = (text, animeID) => {
            commentsAPI.addCommentToAnimePage(text, animeID).then(response => {
                commentsAPI.showLastCommentsPage(animeID).then(data => {
                    props.dispatch({ type: "setActivePage", activePage: data.numberOfPages})
                    props.dispatch({ type: "setStateCommentsData", newState: data.data });
                    props.dispatch({ type: "clearInputText" });
                    props.dispatch({ type: "changedDBComments" });
                    setTimeout(scrollDown, 80);
                })
            })
        };

        //--- Додавання комментарів і сторінок
        let commentsComponents = props.commentsData.comments.map(c => <Comment text={c.text} key={c.id} />)

        let commentPagesCount = Math.ceil(props.commentsData.commentsLength / 5);
        let commentPages = [];

        for (let i = 1; i < commentPagesCount + 1; i++) { //Задача: обрати активний класс і перемалювати його колір
            commentPages.push(<span key={i} id={i} className={animeFullPage_style.commentPages} onClick={showClickCommentsPage}>{i} </span>);
        }
        //---

        return (<AnimeFullPage animeData={props.animeData.anime[animeID]} inputText={props.animeData.inputText} animeID={animeID} commentsComponents={commentsComponents} activePage={props.commentsData.activePage} commentPages={commentPages} addComment={addComment} setNewInputText={setNewInputText} />);
    }
}

export default AnimeFullPageContainer;
