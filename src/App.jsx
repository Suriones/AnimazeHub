import React, { useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import AnimeFullPageContainer from "./Components/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx";
import { Routes, Route } from "react-router-dom";
import { animeAPI, newsAPI } from "./Redux/API/api.js";

const App = (props) => {

    useEffect(() => {
        animeAPI.getAll().then(data => {
            props.dispatch({ type: "setStateAnimeData", newState: data })
        });
    }, [props.state.animeData.checkerUpdate]);

    useEffect(() => {
        newsAPI.getAll().then(data => {
            props.dispatch({ type: "setStateNewsData", newState: data });
        });
    }, [props.state.newsData.checkerUpdate]);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<News newsData={props.state.newsData.news} dispatch={props.dispatch} />} />
                <Route path="/anime" element={<Anime animeData={props.state.animeData.anime} />} />
                <Route path="/anime/:animeId" element={<AnimeFullPageContainer animeData={props.state.animeData} dispatch={props.dispatch} commentsData={props.state.commentsData} />} />
            </Routes>
        </div>
    );
}

export default App;