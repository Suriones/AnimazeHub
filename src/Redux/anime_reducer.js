import { animeAPI } from "./API/api.js";

const initialState = {
    anime: [],
    checkerUpdate: false
};

const anime_reducer = (state = initialState, action) => {

    const _createStateCopyAnime = () => {
        let stateCopy = {
            anime: [],
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

        case "setAnimeState":
            stateCopy = _createStateCopyAnime();

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.anime[i] = action.newState[i];
            }

            return stateCopy;
            stateCopy = _createStateCopyAnime();
            stateCopy.inputText = "";
            return stateCopy;

        case "refreshAnimeDB":
            stateCopy = _createStateCopyAnime();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;
            
        default:
            return state;
    }
}

export const animeDAL = {
    getAll() {
        return (dispatch) => {
            animeAPI.getAll().then(data => {
                dispatch({ type: "setAnimeState", newState: data })
            });
        }
    }
}

export default anime_reducer;