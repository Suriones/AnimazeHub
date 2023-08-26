const initialState = [
    {
        id: 1, name: "One Piece", comments: [
            { id: 1, text: "Good anime!" },
            { id: 2, text: "WpWp!" }
        ]
    },
    {
        id: 2, name: "Death Note", comments: [

        ]
    }
];

const anime_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addComment":
            if (action.text !== "") {
                let comment = {
                    id: state[0].comments.length + 1,
                    text: action.text
                }

                state[0].comments.push(comment);
                return state;
            }
        default:
            return state;
    }
}

export default anime_reducer;