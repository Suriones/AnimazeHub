import App from "./App.jsx";
import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client.js";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux_store.js";
import { newsBLL } from "./Redux/news_reducer.js";
import { animeBLL } from "./Redux/anime_reducer.js";
import { commentsBLL } from "./Redux/comments_reducer.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = () => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} newsBLL={newsBLL} animeBLL={animeBLL} commentsBLL={commentsBLL} />
        </BrowserRouter>);
};

renderTree();

store.subscribe(renderTree);