const initialState = [];

const anime_reducer = (state = initialState, action) => {

    switch (action.type) {

        case "addComment":
            if (action.text) {
                let comment = {
                    id: state[action.id].comments.length + 1,
                    text: action.text
                }

                let stateCopy = state.map(item => ({
                    id: item.id,
                    name: item.name,
                    comments: (item.comments.map(comment => ({
                        id: comment.id,
                        text: comment.text
                    })))
                }));

                stateCopy[action.id].comments.push(comment);

                return stateCopy;
            }
        case "setStateAnimeData":
            return state = action.newState;

        default:
            return state;
    }
}

export default anime_reducer;