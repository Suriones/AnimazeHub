import { reviewAPI } from "../API/api";

const initialState = {
    review: [],
    refresh: false,
    reviewRequestStatus: false
}

const review_reducer = (state = initialState, action) => {
    const _createStateCopyReview = () => {
        const stateCopy = {
            review: [],
            refresh: state.refresh,
            reviewRequestStatus: state.reviewRequestStatus
        }

        stateCopy.review = state.review.map(item => ({
            content: item.content,
            username: item.username,
            time: item.time,
            title: item.title,
            smallImageURL: item.smallImageURL,
            bigImageURL: item.bigImageURL,
            key: item.key
        }));

        return stateCopy;
    }

    const stateCopy = _createStateCopyReview();

    switch (action.type) {
        case "setReviewState":
            stateCopy.review = [];

            action.newState.map(item => stateCopy.review.push(item));
            stateCopy.reviewRequestStatus = true;

            return stateCopy;

        case "refreshReviewDB":
            stateCopy.refresh = !stateCopy.refresh;
            return stateCopy;

        default:
            return stateCopy;
    }
}

export const reviewDAL = {
    getAll() {
        return async (dispatch) => {

            const data = await reviewAPI.getAll();
            const newData = [];

            for (let key in data) {
                const item = data[key];
                item.key = key;
                newData.push(item);
            }

            dispatch({ type: "setReviewState", newState: newData });
        }
    },
    postReview(review) {
        return async (dispatch) => {
            await reviewAPI.postReview(review);
            dispatch({ type: "refreshReviewDB" });
        }
    }
}

export default review_reducer;