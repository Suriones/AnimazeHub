import { newsAPI } from "./../API/api";

const initialState = {
    news: [],
    refresh: false,
    titleOfTheNewsAddingField: "",
    valueOfTheNewsAddingField: "",
    newsRequestStatus: false
};

const news_reducer = (state = initialState, action) => {

    const _createStateCopyNews = () => {
        const stateCopy = {
            news: [],
            refresh: state.refresh,
            titleOfTheNewsAddingField: state.titleOfTheNewsAddingField,
            valueOfTheNewsAddingField: state.valueOfTheNewsAddingField,
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

        case "setTitleOfTheNewsAddingField":
            stateCopy.titleOfTheNewsAddingField = action.value;
            return stateCopy;

        case "setValueOfTheNewsAddingField":
            stateCopy.valueOfTheNewsAddingField = action.value;
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
    postNews(value, username, time, title) {
        return async (dispatch) => {

            await newsAPI.postNews(value, username, time, title);

            dispatch({ type: "setValueOfTheNewsAddingField", value: "" });
            dispatch({ type: "setTitleOfTheNewsAddingField", value: "" });
            dispatch({ type: "refreshNewsDB" });
        }
    }
}

export default news_reducer;