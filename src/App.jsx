import React from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import AnimeFullPage from "./Components/Anime/AnimeBlock/AnimeFullPage/AnimeFullPage.jsx";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
    return (
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<News newsData = {props.state.newsData} />} />
                    <Route path="/anime" element={<Anime animeData = {props.state.animeData}/>} />
                    <Route path="/anime/*" element={<AnimeFullPage animeData = {props.state.animeData} dispatch={props.dispatch}/>} />
                </Routes>
            </div>
    );
}

export default App;