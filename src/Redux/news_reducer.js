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
            name: item.name
        }));

        return stateCopy;
    }

    let stateCopy;

    switch (action.type) {
        case "setStateNewsData":
            stateCopy = _createStateCopyNews();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.news[i] = action.newState[i];
            }

            return stateCopy;

        case "changedDBNews":
            stateCopy = _createStateCopyNews();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;

        default:
            return state;
    }
}

export default news_reducer;