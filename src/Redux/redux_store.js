import { combineReducers, legacy_createStore as createStore } from "redux"
import anime_reducer from "./anime_reducer";
import news_reducer from "./news_reducer";
import comments_reducer from "./comments_reducer";

let reducers = combineReducers({
    animeData: anime_reducer,
    newsData: news_reducer,
    commentsData: comments_reducer
})

let store = createStore(reducers);

export default store;