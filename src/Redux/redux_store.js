import { combineReducers, legacy_createStore as createStore } from "redux"
import anime_reducer from "./anime_reducer";
import news_reducer from "./news_reducer";

let reducers = combineReducers({
    animeData: anime_reducer,
    newsData: news_reducer
})

let store = createStore(reducers);

export default store;