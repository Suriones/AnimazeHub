const initialState = {
    anime: []
};

const anime_reducer = (state = initialState, action) => {

    const _createStateCopyAnime = () => {
        let stateCopy = {
            anime: []
        }

        stateCopy.anime = state.anime.map(item => ({
            id: item.id,
            name: item.name,
            img: item.img,
            description: item.description,
            trailer: item.trailer,
            comments: (item.comments.map(comment => ({
                id: comment.id,
                text: comment.text
            })))
        }));

        return stateCopy;
    }

    switch (action.type) {
        case "addComment":
            if (action.text) {

                let comment = {
                    id: state.anime[action.id].comments.length + 1,
                    text: action.text
                }

                let stateCopy = _createStateCopyAnime();

                stateCopy.anime[action.id].comments.push(comment);

                return stateCopy;
            }

            return state;

        case "setStateAnimeData":
            let stateCopy = _createStateCopyAnime();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.anime[i] = action.newState[i];
            }

            return stateCopy;

        default:
            return state;
    }
}

export default anime_reducer;