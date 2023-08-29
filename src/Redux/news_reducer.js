const initialState = {
    news: []
};

const news_reducer = (state = initialState, action) => {

    const _createStateCopyNews = () => {
        let stateCopy = {
            news: []
        }

        stateCopy.news = state.news.map(item => ({
            id: item.id,
            name: item.name
        }));

        return stateCopy;
    }

    switch (action.type) {
        case "setStateNewsData":
            let stateCopy = _createStateCopyNews();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.news[i] = action.newState[i];
            }

            return stateCopy;

        default:
            return state;
    }
}

export default news_reducer;