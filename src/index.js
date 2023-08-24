import App from "./App.jsx";
import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client.js";

let newsData = [
    { id: 1, name: "News 1" },
    { id: 2, name: "News 2" },
    { id: 3, name: "News 3" }
];

let animeData = [
    { id: 1, name: "One Piece" },
    { id: 2, name: "Death Note" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App newsData = {newsData} animeData = {animeData}/>);