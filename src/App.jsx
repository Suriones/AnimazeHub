import React, { Suspense, lazy, useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/Pages/News/News.jsx"
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading/Loading.jsx";

const Register = lazy(() => import("./Components/Pages/Auth/Register/Register.jsx"));
const Login = lazy(() => import("./Components/Pages/Auth/Login/Login.jsx"));
const Anime = lazy(() => import("./Components/Pages/Anime/Anime.jsx"));
const AnimeFullPageContainer = lazy(() => import("./Components/Pages/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx"));
const PageNotFound = lazy(() => import("./Components/Pages/PageNotFound/PageNotFound.jsx"));

const App = (props) => {

    useEffect(() => {
        props.dispatch(props.animeDAL.getAll());
    }, [props.state.animeData.checkerUpdate]);

    return (
        <div>
            <Header authData={props.state.authData}/>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/login" element={<Login authData={props.state.authData} dispatch={props.dispatch} authDAL={props.authDAL}/>} />
                    <Route path="/register" element={<Register authData={props.state.authData} dispatch={props.dispatch} authDAL={props.authDAL}/>} />
                    <Route path="/" element={<News checkerUpdate={props.state.newsData.checkerUpdate} news={props.state.newsData.news} dispatch={props.dispatch} newsDAL={props.newsDAL} authData={props.state.authData} />} />
                    <Route path="/anime" element={<Anime anime={props.state.animeData.anime} />} />
                    <Route path="/anime/:animeId" element={<AnimeFullPageContainer animeData={props.state.animeData} commentsData={props.state.commentsData} authData={props.state.authData} dispatch={props.dispatch} animeDAL={props.animeDAL} commentsDAL={props.commentsDAL} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;