import comments_reducer from "./comments_reducer";

let store = {

    _state: {
        newsData: [
            { id: 0, name: "News 1" },
            { id: 1, name: "News 2" },
            { id: 2, name: "News 3" }
        ],
        animeData: [
            { id: 0, name: "One Piece" },
            { id: 1, name: "Death Note" }
        ],
        commentsData: [
            { id: 0, text: "Good anime!" },
            { id: 0, text: "WpWp!" }
        ]
    },

    getState() {return this._state;},

    dispatch(action) {
        comments_reducer(this.getState(), action);
        this._refreshRenderTree();
    },

    _refreshRenderTree() { },
    subscribe(observer) {
        this._refreshRenderTree = observer;
    }
}

export default store;