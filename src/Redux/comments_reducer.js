import { commentsAPI } from "./../API/api.js";

const initialState = {
    comments: [],
    refresh: false,
    valueOfTheCommentAddingField: "",
    activePage: 1,
    commentsRequestStatus: false
};

const comments_reducer = (state = initialState, action) => {

    const _createStateCopyComments = () => {
        let stateCopy = {
            comments: [],
            refresh: state.refresh,
            valueOfTheCommentAddingField: state.valueOfTheCommentAddingField,
            activePage: state.activePage,
            commentsRequestStatus: state.commentsRequestStatus
        }

        stateCopy.comments = state.comments.map(item => ({
            text: item.text,
            username: item.username,
            time: item.time
        }));

        return stateCopy;
    }

    const stateCopy = _createStateCopyComments();

    switch (action.type) {

        case "setCommentsState":
            stateCopy.comments = [];

            action.newState.map(item => stateCopy.comments.push(item));
            stateCopy.activePage = stateCopy.comments.length ? Math.ceil(stateCopy.comments.length / 5) : 1;

            stateCopy.commentsRequestStatus = true;

            return stateCopy;

        case "refreshCommentsDB":
            stateCopy.refresh = !stateCopy.refresh;
            return stateCopy;

        case "setValueOfTheCommentAddingField":
            stateCopy.valueOfTheCommentAddingField = action.value;
            return stateCopy;

        case "setActivePage":
            stateCopy.activePage = action.activePage;
            return stateCopy;

        default:
            return stateCopy;
    }
}

export const commentsDAL = {
    postComment(text, key, type, username, time) {
        return async (dispatch) => {

            await commentsAPI.postComment(text, key, type, username, time);

            dispatch({ type: "refreshCommentsDB" });
            dispatch({ type: "setValueOfTheCommentAddingField", value: "" });
        }
    },
    getAll(type, key) {
        return async (dispatch) => {

            const data = await commentsAPI.getAll(type, key);
            const newData = [];

            for (let key in data) newData.push(data[key]);

            dispatch({ type: "setCommentsState", newState: newData });
        }
    }
}

export default comments_reducer;