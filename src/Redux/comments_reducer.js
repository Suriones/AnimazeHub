import { commentsAPI } from "./API/api.js";

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

        case "setCommentsState":
            stateCopy = _createStateCopyComments();
            stateCopy.comments = [];

            for (let i = 0; i < action.newState.length; i++) {
                stateCopy.comments[i] = action.newState[i];
            }

            return stateCopy;

        case "refreshCommentsDB":
            stateCopy = _createStateCopyComments();
            stateCopy.checkerUpdate = !stateCopy.checkerUpdate;
            return stateCopy;

        case "setAnimeIDCommentsLength":
            stateCopy = _createStateCopyComments();
            stateCopy.commentsLength = action.commentsLength;
            return stateCopy;

        case "setCommentsActivePage":
            stateCopy = _createStateCopyComments();
            stateCopy.activePage = action.activePage;
            return stateCopy;

        default:
            return state;
    }
}

export const commentsBLL = {
    getAnimeIdCountComments(animeID) {
        return (dispatch) => {
            commentsAPI.getAnimeIdCountComments(animeID).then(count => {
                dispatch({ type: "setAnimeIDCommentsLength", commentsLength: count });
            })
        }
    },
    showAnimeIdFirstCommentsPage(animeID) {
        return (dispatch) => {
            commentsAPI.showAnimeIdFirstCommentsPage(animeID).then(data => {
                dispatch({ type: "setCommentsState", newState: data });
                dispatch({ type: "setCommentsActivePage", activePage: 1 });
            })
        }
    },
    showAnimeIdActiveCommentsPage(selectedPage, animeID) {
        return (dispatch) => {
            commentsAPI.showAnimeIdActiveCommentsPage(selectedPage.target.id, animeID).then(data => {
                dispatch({ type: "setCommentsState", newState: data });
                dispatch({ type: "setCommentsActivePage", activePage: selectedPage.target.id });
            });
        }
    },
    addCommentToAnimePage(text, animeID) {
        return (dispatch) => {
            if (text === "") {text = "Empty comment";}
            commentsAPI.addCommentToAnimePage(text, animeID).then(function () {
                commentsAPI.showAnimeIdLastCommentsPage(animeID).then(response => {
                    dispatch({ type: "setCommentsActivePage", activePage: response.activePage });
                    dispatch({ type: "setCommentsState", newState: response.data });
                    dispatch({ type: "clearInputText" });
                    dispatch({ type: "refreshCommentsDB" });
                })
            })
        }
    }
}

export default comments_reducer;