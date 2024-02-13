import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from "./Components/ReusableComponents/StateStatus/Loading/Loading.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import Register from "./Components/Pages/Auth/Register/Register.jsx";
import Login from "./Components/Pages/Auth/Login/Login.jsx";
import MainContainer from "./Components/Pages/Main/MainContainer.jsx";
import AnimeContainer from "./Components/Pages/Anime/AnimeContainer.jsx";
import VideoContentPageContainer from "./Components/ReusableComponents/VideoContentPage/VideoContentPageContainer.jsx";
import AnimeAddingPage from "./Components/Pages/Anime/AnimeAddingPage/AnimeAddingPage.jsx";
import PageNotFound from "./Components/ReusableComponents/StateStatus/PageNotFound/PageNotFound.jsx";
import ReviewAddingPage from "./Components/Pages/Main/ReviewAddingPage/ReviewAddingPage.jsx";
import NewsAddingPage from "./Components/Pages/Main/NewsAddingPage/NewsAddingPage.jsx"

const App = (props) => {

    useEffect(() => {
        props.dispatch(props.animeDAL.getAll());
    }, [props.state.animeData.refresh]);

    useEffect(() => {
        props.dispatch(props.newsDAL.getAll());
    }, [props.state.newsData.refresh]);

    useEffect(() => {
        props.dispatch(props.reviewDAL.getAll());
    }, [props.state.reviewData.refresh]);

    const data = {
        main: {
            dispatch: props.dispatch,
            newsDAL: props.newsDAL,
            newsData: props.state.newsData,
            reviewData: props.state.reviewData,
            authData: props.state.authData,
            animeData: props.state.animeData
        },
        anime: {
            dispatch: props.dispatch,
            animeDAL: props.animeDAL,
            authDAL: props.authDAL,
            animeData: props.state.animeData,
            authData: props.state.authData
        },
        animeAddingPage: {
            dispatch: props.dispatch,
            animeDAL: props.animeDAL,
            authData: props.state.authData
        },
        reviewAddingPage: {
            dispatch: props.dispatch,
            reviewDAL: props.reviewDAL,
            authData: props.state.authData
        },
        newsAddingPage: {
            dispatch: props.dispatch,
            newsDAL: props.newsDAL,
            authData: props.state.authData
        },
        animeFullPage: {
            dispatch: props.dispatch,
            animeDAL: props.animeDAL,
            commentsDAL: props.commentsDAL,
            animeData: props.state.animeData,
            commentsData: props.state.commentsData,
            authData: props.state.authData
        },
        login: {
            dispatch: props.dispatch,
            authDAL: props.authDAL,
            authData: props.state.authData,
        },
        register: {
            dispatch: props.dispatch,
            authDAL: props.authDAL,
            authData: props.state.authData,
        }
    }

    return (
        <div>
            <HeaderContainer authData={props.state.authData} dispatch={props.dispatch} />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/login" element={<Login data={data.login} />} />
                    <Route path="/register" element={<Register data={data.register} />} />
                    <Route path="/" element={<MainContainer data={data.main} />} />
                    <Route path="/anime" element={<AnimeContainer data={data.anime} />} />
                    <Route path="/anime/:animeId" element={<VideoContentPageContainer data={data.animeFullPage} />} />
                    <Route path="/addAnime" element={<AnimeAddingPage data={data.animeAddingPage} />} />
                    <Route path="/addReview" element={<ReviewAddingPage data={data.reviewAddingPage} />} />
                    <Route path="/addNews" element={<NewsAddingPage data={data.newsAddingPage} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
            <ToastContainer />
        </div>
    );
}

export default App;