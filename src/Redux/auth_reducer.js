import { authAPI } from "./../API/api";

const initialState = {
    likedAnime: [],
    login: null,
    password: null,
    admin: false,
    authStatus: false,
    userID: ""
};

const auth_reducer = (state = initialState, action) => {

    const _createStateCopyAuth = () => {
        let stateCopy = {
            likedAnime: [],
            login: state.login,
            password: state.password,
            admin: state.admin,
            authStatus: state.authStatus,
            userID: state.userID
        }

        state.likedAnime.map(item => stateCopy.likedAnime.push(item));

        return stateCopy;
    }

    const stateCopy = _createStateCopyAuth();

    switch (action.type) {
        case "setActiveUser":
            stateCopy.likedAnime = [];
            stateCopy.login = action.user.login;
            stateCopy.password = action.user.password;
            stateCopy.admin = action.user.admin;
            stateCopy.userID = action.user.userID;
            stateCopy.authStatus = true;

            for (let key in action.user.likedAnime) {
                const likedAnimeItem = {};
                likedAnimeItem[key] = action.user.likedAnime[key].animeID;
                stateCopy.likedAnime.push(likedAnimeItem);
            }

            return stateCopy;

        case "exitUser":
            stateCopy.likedAnime = [];
            stateCopy.login = null;
            stateCopy.password = null;
            stateCopy.admin = false;
            stateCopy.authStatus = false;
            stateCopy.userID = "";

            return stateCopy;

        case "likeAnime":
            const like = {};
            like[action.likeID] = action.animeID;
            stateCopy.likedAnime.push(like);

            return stateCopy;

        case "unlikeAnime":

            for (let i = 0; i < stateCopy.likedAnime.length; i++) {
                if (Object.keys(stateCopy.likedAnime[i])[0] === action.likeID) {
                    stateCopy.likedAnime.splice(i, 1);
                    return stateCopy;
                }
            }

            return stateCopy;

        default:
            return stateCopy;
    }
}

export const authDAL = {
    checkingLoginUniqueness(userEnteredLogin) {
        return async () => {

            const users = await authAPI.getAll();

            for (let key in users)
                if (users[key].login === userEnteredLogin)
                    return false;

            return true;
        }
    },
    registerUser(userEnteredData) {
        return async (dispatch) => {

            const user = await authAPI.registerUser(userEnteredData);
            userEnteredData.userID = user.data.name;

            dispatch({ type: "setActiveUser", user: userEnteredData });
        }
    },
    loginUser(userEnteredData) {
        return async (dispatch) => {

            const users = await authAPI.getAll();

            for (let key in users) {
                if (users[key].login === userEnteredData.login && users[key].password === userEnteredData.password) {
                    const user = users[key];
                    user.userID = key;
                    dispatch({ type: "setActiveUser", user: user });
                    return true;
                }
            }

            return false;
        }
    },
    likeAnime(userID, animeID) {
        return async (dispatch) => {

            const result = await authAPI.likeAnime(userID, animeID);

            dispatch({ type: "likeAnime", likeID: result.likeID, animeID: animeID });
            dispatch({ type: "likeAnimeCount", animeID: animeID, actualLikeCount: result.actualLikeCount });
        }
    },
    unlikeAnime(userID, likeID, animeID) {
        return async (dispatch) => {

            const actualLikeCount = await authAPI.unlikeAnime(userID, likeID, animeID);

            dispatch({ type: "unlikeAnime", likeID: likeID });
            dispatch({ type: "unlikeAnimeCount", animeID: animeID, actualLikeCount: actualLikeCount });
        }
    }
}

export default auth_reducer;