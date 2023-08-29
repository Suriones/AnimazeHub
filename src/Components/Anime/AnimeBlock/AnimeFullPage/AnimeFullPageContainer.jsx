import React from "react";
import Comment from "./Comments/Comment";
import AnimeFullPage from "./AnimeFullPage";

const AnimeFullPageContainer = (props) => {

    const url = window.location.href;
    const id = parseInt(url.replace("http://localhost:3000/anime/", ""));

    const send = (text, id) => {
        props.dispatch({ type: "addComment", text: text, id: id });
    }

    if (props.animeData.length !== 0) { //Перевірка на нульовий рендер, якщо дані ще не оновились або не встигли прийти, рендериться пуста сторінка. Зафіксив таким чином помилку в консолі (props.animeData.comments = undefined).
        let commentsComponents = props.animeData[id].comments.map(c => <Comment text={c.text} key={c.id} />);
        return (<AnimeFullPage name={props.animeData[id].name} send={send} commentsComponents={commentsComponents} id={id} />);
    } else {
        return (<AnimeFullPage />);
    }
}

export default AnimeFullPageContainer;
