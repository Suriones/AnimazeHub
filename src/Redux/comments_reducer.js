const initialState = {
    comments: [],
    checkerUpdate: false,
    commentsLength: 0,
    activePage: 1
};

const comments_reducer = (state = initialState, action) => {

    const _createStateCopyComments = () => {
        let stateCopy = {
            comments: [],
            checkerUpdate: state.checkerUpdate,
            commentsLength: state.commentsLength,
            activePage: state.activePage
        }

        stateCopy.comments = state.comments.map(item => ({
            id: item.id,
            text: item.text,
            animeId: item.animeId,
            newsId: item.newsId
        }));

        return stateCopy;
    }

    let stateCopy;

    switch (action.type) {

        case "setStateCommentsData":
            stateCopy = _createStateCopyComments();
            stateCopy.comments = [];

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.comments[i] = action.newState[i];
            }

            return stateCopy;

        case "changedDBComments":
            stateCopy = _createStateCopyComments();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;

        case "setCommentsLength":
            stateCopy = _createStateCopyComments();
            stateCopy.commentsLength = action.commentsLength;
            return stateCopy;

        case "setActivePage":
            stateCopy = _createStateCopyComments();
            stateCopy.activePage = action.activePage;
            return stateCopy;

        default:
            return state;
    }
}

export default comments_reducer;