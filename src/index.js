import App from "./App.jsx";
import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client.js";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux_store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = () => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>);
};

renderTree();

store.subscribe(renderTree);