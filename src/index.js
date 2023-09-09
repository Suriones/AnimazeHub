import App from "./App.jsx";
import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client.js";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux_store.js";
import { newsDAL } from "./Redux/news_reducer.js";
import { animeDAL } from "./Redux/anime_reducer.js";
import { commentsDAL } from "./Redux/comments_reducer.js";
import { authDAL } from "./Redux/auth_reducer.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = () => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} newsDAL={newsDAL} animeDAL={animeDAL} commentsDAL={commentsDAL} authDAL={authDAL} />
        </BrowserRouter>);
};

renderTree();

store.subscribe(renderTree);