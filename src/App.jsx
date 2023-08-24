import React from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header main="Головна" anime="Список аніме" />
                <Routes>
                    <Route path="/" element={<News newsData = {props.newsData} />} />
                    <Route path="/anime/*" element={<Anime animeData = {props.animeData} />} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;