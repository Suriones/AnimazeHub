import React, { useState } from "react";
import Comment from "./Comments/Comment";
import AnimeFullPage from "./AnimeFullPage";
import { useParams } from "react-router-dom";

const AnimeFullPageContainer = (props) => {

    const id = parseInt(Object.values(useParams()));

    if (props.animeData[id] !== undefined) {

        const send = (text, id) => {
            props.dispatch({ type: "addComment", text: text, id: id });
        }

        const scrollDown = () => {
            window.scrollTo(0, 9999);
        }

        let commentsComponents = props.animeData[id].comments.map(c => <Comment text={c.text} key={c.id} />)

        return (<AnimeFullPage animeData={props.animeData[id]} send={send} commentsComponents={commentsComponents} id={id} scrollDown={scrollDown} />);
    } else {
        return (<AnimeFullPage />);
    }
}

export default AnimeFullPageContainer;
