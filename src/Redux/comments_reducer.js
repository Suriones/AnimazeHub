import { commentsAPI } from "./API/api.js";

const initialState = {
    comments: [],
    checkerUpdate: false,
    commentsLength: 0,
    activePage: 1,
    actualCommentsPagesGroup: 10
};

const comments_reducer = (state = initialState, action) => {

    const _createStateCopyComments = () => {
        let stateCopy = {
            comments: [],
            checkerUpdate: state.checkerUpdate,
            commentsLength: state.commentsLength,
            activePage: state.activePage,
            actualCommentsPagesGroup: state.actualCommentsPagesGroup
        }

        stateCopy.comments = state.comments.map(item => ({
            id: item.id,
            text: item.text,
            animeId: item.animeId
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

        case "setActualCommentsPagesGroup":
            stateCopy = _createStateCopyComments();
            stateCopy.actualCommentsPagesGroup = action.actualCommentsPagesGroup;
            return stateCopy;

        default:
            return state;
    }
}

export const commentsDAL = {
    getAnimeIdCountComments(animeID) {
        return async (dispatch) => {
            const count = await commentsAPI.getAnimeIdCountComments(animeID);
            dispatch({ type: "setAnimeIDCommentsLength", commentsLength: count });
        }
    },
    showAnimeIdFirstCommentsPage(animeID) {
        return async (dispatch) => {
            const data = await commentsAPI.showAnimeIdFirstCommentsPage(animeID);
            dispatch({ type: "setCommentsState", newState: data });
            dispatch({ type: "setCommentsActivePage", activePage: 1 });
        }
    },
    showAnimeIdActiveCommentsPage(selectedPage, animeID) {
        return async (dispatch) => {
            const data = await commentsAPI.showAnimeIdActiveCommentsPage(selectedPage, animeID);
            dispatch({ type: "setCommentsState", newState: data });
            dispatch({ type: "setCommentsActivePage", activePage: selectedPage });
        }
    },
    addCommentToAnimePage(text, animeID) {
        if (text === "") {text = "test"};
        return async (dispatch) => {
            await commentsAPI.addCommentToAnimePage(text, animeID);
            const response = await commentsAPI.showAnimeIdLastCommentsPage(animeID);
            dispatch({ type: "setCommentsActivePage", activePage: response.activePage });
            dispatch({ type: "setCommentsState", newState: response.data });
            dispatch({ type: "refreshCommentsDB" });

            function actualCommentsPagesGroupFromActivePage(activePage) {
                return Math.floor((activePage - 0.01) / 10) * 10 + 10;
            }

            dispatch({type: "setActualCommentsPagesGroup", actualCommentsPagesGroup: actualCommentsPagesGroupFromActivePage(response.activePage)})
        }
    }
}

export default comments_reducer;