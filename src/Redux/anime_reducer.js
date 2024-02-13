import { animeAPI } from "./../API/api.js";

const initialState = {
    anime: [],
    filteredAnime: [],
    refresh: false,
    animeRequestStatus: false,
    valueSearchField: ""
};

const anime_reducer = (state = initialState, action) => {

    const _createStateCopyAnime = () => {
        let stateCopy = {
            anime: [],
            filteredAnime: [],
            refresh: state.refresh,
            animeRequestStatus: state.animeRequestStatus,
            valueSearchField: state.valueSearchField
        }

        stateCopy.anime = state.anime.map(item => ({
            name: item.name,
            img: item.img,
            description: item.description,
            trailer: item.trailer,
            country: item.country,
            year: item.year,
            genre: item.genre,
            like: item.like,
            animeID: item.animeID,
            videoPlayer: item.videoPlayer,
            comments: {}
        }));

        stateCopy.filteredAnime = state.filteredAnime.map(item => ({
            name: item.name,
            img: item.img,
            description: item.description,
            trailer: item.trailer,
            country: item.country,
            year: item.year,
            genre: item.genre,
            like: item.like,
            animeID: item.animeID,
            videoPlayer: item.videoPlayer,
            comments: {}
        }));

        for (let i = 0; i < state.anime.length; i++) {
            for (let key in state.anime[i].comments) {
                stateCopy.anime[i].comments[key] = {
                    text: state.anime[i].comments[key].text,
                    time: state.anime[i].comments[key].time,
                    username: state.anime[i].comments[key].username
                }
            }
        }

        for (let i = 0; i < state.filteredAnime.length; i++) {
            for (let key in state.filteredAnime[i].comments) {
                stateCopy.filteredAnime[i].comments[key] = {
                    text: state.filteredAnime[i].comments[key].text,
                    time: state.filteredAnime[i].comments[key].time,
                    username: state.filteredAnime[i].comments[key].username
                }
            }
        }

        return stateCopy;
    }

    const stateCopy = _createStateCopyAnime();

    switch (action.type) {

        case "setAnimeState":
            stateCopy.anime = [];
            stateCopy.filteredAnime = [];

            action.newState.map(item => {
                stateCopy.anime.push(item);
                stateCopy.filteredAnime.push(item);
            });

            stateCopy.animeRequestStatus = true;

            return stateCopy;

        case "refreshAnimeDB":
            stateCopy.refresh = !stateCopy.refresh;
            return stateCopy;

        case "likeAnimeCount":
            for (let i = 0; i < stateCopy.filteredAnime.length; i++) {
                if (stateCopy.filteredAnime[i].animeID === action.animeID) {
                    stateCopy.filteredAnime[i].like = action.actualLikeCount;
                }
            }

            return stateCopy;

        case "unlikeAnimeCount":
            for (let i = 0; i < stateCopy.filteredAnime.length; i++) {
                if (stateCopy.filteredAnime[i].animeID === action.animeID) {
                    stateCopy.filteredAnime[i].like = action.actualLikeCount;
                }
            }

            return stateCopy;

        case "sort":
            if (action.sort === "name") {
                stateCopy.filteredAnime.sort((a, b) => a[action.sort] > b[action.sort] ? -1 : 1);
            } else {
                stateCopy.filteredAnime.sort((a, b) => a[action.sort] > b[action.sort] ? 1 : -1);
            }

            return stateCopy;

        case "setValueSearchField":
            stateCopy.valueSearchField = action.value;
            stateCopy.filteredAnime = [];

            for (let i = 0; i < stateCopy.anime.length; i++) {
                if (stateCopy.anime[i].name.toUpperCase().indexOf(action.value.toUpperCase()) >= 0) {
                    stateCopy.filteredAnime.push(stateCopy.anime[i]);
                }
            }

            return stateCopy;

        default:
            return stateCopy;
    }
}

export const animeDAL = {
    getAll() {
        return async (dispatch) => {

            const data = await animeAPI.getAll();
            const newData = [];

            for (let key in data) {
                const item = data[key];
                item.animeID = key;
                newData.push(item);
            }

            dispatch({ type: "setAnimeState", newState: newData });
        }
    },
    postAnime(anime) {
        return async (dispatch) => {
            await animeAPI.postAnime(anime);
            dispatch({ type: "refreshAnimeDB" });
        }
    }
}

export default anime_reducer;