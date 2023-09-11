import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Pages/Loading/Loading.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";

const Register = lazy(() => import("./Components/Pages/Auth/Register/Register.jsx"));
const Login = lazy(() => import("./Components/Pages/Auth/Login/Login.jsx"));
const NewsContainer = lazy(() => import("./Components/Pages/News/NewsContainer.jsx"));
const AnimeContainer = lazy(() => import("./Components/Pages/Anime/AnimeContainer.jsx"));
const AnimeFullPageContainer = lazy(() => import("./Components/Pages/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx"));
const AddAnime = lazy(() => import("./Components/Pages/Anime/AddAnime/AddAnime.jsx"));
const PageNotFound = lazy(() => import("./Components/Pages/PageNotFound/PageNotFound.jsx"));

const App = (props) => {

    useEffect(() => {
        props.dispatch(props.animeDAL.getAll());
    }, [props.state.animeData.checkerUpdate]);

    return (
        <div>
            <HeaderContainer authData={props.state.authData} dispatch={props.dispatch} />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/login" element={<Login authData={props.state.authData} dispatch={props.dispatch} authDAL={props.authDAL} />} />
                    <Route path="/register" element={<Register authData={props.state.authData} dispatch={props.dispatch} authDAL={props.authDAL} />} />
                    <Route path="/" element={<NewsContainer checkerUpdate={props.state.newsData.checkerUpdate} news={props.state.newsData.news} dispatch={props.dispatch} newsDAL={props.newsDAL} authData={props.state.authData} />} />
                    <Route path="/anime" element={<AnimeContainer anime={props.state.animeData.anime} authData={props.state.authData}/>} />
                    <Route path="/anime/:animeId" element={<AnimeFullPageContainer animeData={props.state.animeData} commentsData={props.state.commentsData} authData={props.state.authData} dispatch={props.dispatch} animeDAL={props.animeDAL} commentsDAL={props.commentsDAL} />} />
                    <Route path="/addAnime" element={<AddAnime dispatch={props.dispatch} animeDAL={props.animeDAL} authData={props.state.authData} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;