import React, { useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import AnimeFullPageContainer from "./Components/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx";
import { Routes, Route } from "react-router-dom";

const App = (props) => {

    useEffect(() => {
        props.dispatch(props.animeDAL.getAll());
    }, [props.state.animeData.checkerUpdate]);

    useEffect(() => {
        props.dispatch(props.newsDAL.getAll());
    }, [props.state.newsData.checkerUpdate]);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<News news={props.state.newsData.news} dispatch={props.dispatch} newsDAL={props.newsDAL}/>} />
                <Route path="/anime" element={<Anime anime={props.state.animeData.anime} />} />
                <Route path="/anime/:animeId" element={<AnimeFullPageContainer animeData={props.state.animeData} commentsData={props.state.commentsData} dispatch={props.dispatch} animeDAL={props.animeDAL} commentsDAL={props.commentsDAL} />} />
            </Routes>
        </div>
    );
}

export default App;