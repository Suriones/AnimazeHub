import { newsAPI } from "./../API/api";

const initialState = {
    news: [],
    refresh: false,
    newsRequestStatus: false
};

const news_reducer = (state = initialState, action) => {

    const _createStateCopyNews = () => {
        const stateCopy = {
            news: [],
            refresh: state.refresh,
            newsRequestStatus: state.newsRequestStatus
        }

        stateCopy.news = state.news.map(item => ({
            value: item.value,
            username: item.username,
            time: item.time,
            title: item.title
        }));

        return stateCopy;
    }

    const stateCopy = _createStateCopyNews();

    switch (action.type) {
        case "setNewsState":
            stateCopy.news = [];

            action.newState.map(item => stateCopy.news.push(item));
            stateCopy.newsRequestStatus = true;

            return stateCopy;

        case "refreshNewsDB":
            stateCopy.refresh = !stateCopy.refresh;
            return stateCopy;

        default:
            return stateCopy;
    }
}

export const newsDAL = {
    getAll() {
        return async (dispatch) => {

            const data = await newsAPI.getAll();
            const newData = [];

            for (let key in data) newData.push(data[key]);

            dispatch({ type: "setNewsState", newState: newData });
        }
    },
    postNews(news) {
        return async (dispatch) => {

            await newsAPI.postNews(news);

            dispatch({ type: "refreshNewsDB" });
        }
    }
}

export default news_reducer;