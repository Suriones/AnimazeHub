const initialState = {
    anime: [],
    inputText: "",
    checkerUpdate: false
};

const anime_reducer = (state = initialState, action) => {

    const _createStateCopyAnime = () => {
        let stateCopy = {
            anime: [],
            inputText: state.inputText,
            checkerUpdate: state.checkerUpdate
        }

        stateCopy.anime = state.anime.map(item => ({
            id: item.id,
            name: item.name,
            img: item.img,
            description: item.description,
            trailer: item.trailer
        }));

        return stateCopy;
    }

    let stateCopy;

    switch (action.type) {

        case "setStateAnimeData":
            stateCopy = _createStateCopyAnime();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.anime[i] = action.newState[i];
            }

            return stateCopy;

        case "setNewInputText":
            stateCopy = _createStateCopyAnime();
            stateCopy.inputText = action.value;
            return stateCopy;

        case "clearInputText":
            stateCopy = _createStateCopyAnime();
            stateCopy.inputText = "";
            return stateCopy;

        case "changedDBAnime":
            stateCopy = _createStateCopyAnime();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;
        default:
            return state;
    }
}

export default anime_reducer;