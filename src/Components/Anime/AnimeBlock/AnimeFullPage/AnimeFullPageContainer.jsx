import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeFullPage from "./AnimeFullPage";
import CommentsBlockContainer from "../../../CommentsBlock/CommentsBlockContainer.jsx";


const AnimeFullPageContainer = (props) => {

    const animeID = parseInt(Object.values(useParams()));

    if (!props.animeData.anime[animeID]) {
        return (<AnimeFullPage />);
    } else {
        const commentsData = {
            commentsData: props.commentsData,
            dispatch: props.dispatch,
            commentsDAL: props.commentsDAL,
            inputText: props.animeData.inputText,
            animeID: animeID,
            checkerUpdate: props.commentsData.checkerUpdate
        }

        return (<div><AnimeFullPage data={props.animeData.anime[animeID]} /><CommentsBlockContainer data={commentsData} /></div>);
    }
}

export default AnimeFullPageContainer;