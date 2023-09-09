import React from "react";
import { useParams } from "react-router-dom";
import AnimeFullPage from "./AnimeFullPage";
import CommentsBlockContainer from "../../../../CommentsBlock/CommentsBlockContainer.jsx";
import PageNotFound from "../../../PageNotFound/PageNotFound";

const AnimeFullPageContainer = (props) => {
    const animeID = parseInt(Object.values(useParams()));

    if (!props.animeData.anime[animeID]) {
        return (<PageNotFound />);
    } else {
        const commentsData = {
            commentsData: props.commentsData,
            dispatch: props.dispatch,
            commentsDAL: props.commentsDAL,
            animeID: animeID,
            checkerUpdate: props.commentsData.checkerUpdate,
            authData: props.authData
        }

        return (<div><AnimeFullPage data={props.animeData.anime[animeID]} /><CommentsBlockContainer data={commentsData} /></div>);
    }
}

export default AnimeFullPageContainer;