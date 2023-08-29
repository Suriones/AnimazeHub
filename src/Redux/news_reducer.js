const initialState = [];

const news_reducer = (state = initialState, action) => {

    switch (action.type) {

        case "setStateNewsData":
            return state = action.newState;

        default:
            return state;
    }
}

export default news_reducer;