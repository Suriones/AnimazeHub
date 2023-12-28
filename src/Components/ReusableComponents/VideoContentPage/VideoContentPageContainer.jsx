import React from "react";
import { useParams } from "react-router-dom";
import VideoContentPage from "./VideoContentPage.jsx";
import CommentsBlockContainer from "../CommentsBlock/CommentsBlockContainer.jsx";
import PageNotFound from "../StateStatus/PageNotFound/PageNotFound.jsx";
import Loading from "../StateStatus/Loading/Loading.jsx"
import videoContentPage_s from "./VideoContentPage.module.scss"

const VideoContentPageContainer = React.memo((props) => {

    if (!props.data.animeData.animeRequestStatus) return <Loading />

    const id = Object.values(useParams()).toString();
    const displayData = {};

    switch (Object.keys(useParams())[0]) {
        case "animeId":
            for (let i = 0; i < props.data.animeData.anime.length; i++) {
                if (props.data.animeData.anime[i].animeID === id) {
                    displayData.information = props.data.animeData.anime[i];
                    displayData.information.id = displayData.information.animeID;
                    displayData.type = "AnimeList/";
                    break;
                }
            }

            break;

        default:
            break;
    }

    const collectData = () => {

        const commentsData = {
            dispatch: props.data.dispatch,
            commentsDAL: props.data.commentsDAL,
            id: id,
            authData: props.data.authData,
            valueOfTheCommentAddingField: props.data.commentsData.valueOfTheCommentAddingField,
            refresh: props.data.commentsData.refresh,
            comments: props.data.commentsData.comments,
            activePage: props.data.commentsData.activePage,
            type: displayData.type,
            commentsRequestStatus: props.data.commentsData.commentsRequestStatus
        }

        return (<div><VideoContentPage data={displayData.information} /><div className={videoContentPage_s.commentWrapper}><CommentsBlockContainer data={commentsData} /></div></div>);
    }

    return !!displayData.information ? collectData() : <PageNotFound />;
})

export default VideoContentPageContainer;