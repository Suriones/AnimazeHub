import React, { useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import AnimeFullPageContainer from "./Components/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx";
import { Routes, Route } from "react-router-dom";
import * as axios from 'axios';

const App = (props) => {

    useEffect(() => { //Наповнення стору данними відразу
        if (props.state.animeData.anime.length === 0) { axios.get("http://localhost:3001/animeData").then(response => { props.dispatch({ type: "setStateAnimeData", newState: response.data }) }) }
        if (props.state.newsData.news.length === 0) { axios.get("http://localhost:3001/newsData").then(response => { props.dispatch({ type: "setStateNewsData", newState: response.data }) }) }
    })

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<News newsData={props.state.newsData.news} />} />
                <Route path="/anime" element={<Anime animeData={props.state.animeData.anime} dispatch={props.dispatch} />} />
                <Route path="/anime/*" element={<AnimeFullPageContainer animeData={props.state.animeData.anime} dispatch={props.dispatch} />} />
            </Routes>
        </div>
    );
}

export default App;