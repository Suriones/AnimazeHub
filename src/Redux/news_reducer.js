import { newsAPI } from "./API/api";

const initialState = {
    news: [],
    checkerUpdate: false
};

const news_reducer = (state = initialState, action) => {

    const _createStateCopyNews = () => {
        let stateCopy = {
            news: [],
            checkerUpdate: state.checkerUpdate
        }

        stateCopy.news = state.news.map(item => ({
            id: item.id,
            name: item.name,
            value: item.value
        }));

        return stateCopy;
    }

    let stateCopy;

    switch (action.type) {
        case "setNewsState":
            stateCopy = _createStateCopyNews();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.news[i] = action.newState[i];
            }

            return stateCopy;

        case "refreshNewsDB":
            stateCopy = _createStateCopyNews();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;

        default:
            return state;
    }
}

export const newsDAL = {
    getAll() {
        return async (dispatch) => {
            const data = await newsAPI.getAll();
            dispatch({ type: "setNewsState", newState: data });
        }
    },
    postNews(id, text, value) {
        return async (dispatch) => {
            await newsAPI.postNews(id, text, value)
            dispatch({ type: "refreshNewsDB" });
        }
    }
}

export default news_reducer;