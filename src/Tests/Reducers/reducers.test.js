import anime_reducer from "../../Redux/anime_reducer";
import auth_reducer from "../../Redux/auth_reducer";
import news_reducer from "../../Redux/news_reducer";
import comments_reducer from "../../Redux/comments_reducer"

it("anime refreshAnimeDB", () => {
    let state = {
        anime: [],
        checkerUpdate: false
    };

    state = anime_reducer(state, { type: "refreshAnimeDB" });
    expect(state).toEqual({ anime: [], checkerUpdate: true });
})

it("anime setAnimeState", () => {
    let state = {
        anime: [],
        checkerUpdate: false
    };

    state = anime_reducer(state, {
        type: "setAnimeState", newState: [{
            id: 1,
            name: "1",
            img: "test",
            description: "test",
            trailer: "test",
        }]
    });

    expect(state).toEqual({
        anime: [{
            id: 1,
            name: "1",
            img: "test",
            description: "test",
            trailer: "test",
        }], checkerUpdate: false
    });
})

it("auth exitUser", () => {
    let state = {
        login: null,
        password: null,
        admin: false,
        authStatus: true
    };

    state = auth_reducer(state, { type: "exitUser" });
    expect(state).toEqual({
        login: null,
        password: null,
        admin: false,
        authStatus: false
    })
})

it("auth setActiveUser", () => {
    let state = {
        login: null,
        password: null,
        admin: false,
        authStatus: false
    };

    let user = {
        login: "user",
        password: "",
        admin: false,
        authStatus: true
    };

    state = auth_reducer(state, { type: "setActiveUser", user: user });
    expect(state).toEqual({
        login: "user",
        password: "",
        admin: false,
        authStatus: true
    });
})

it("news refreshNewsDB", () => {
    let state = {
        news: [],
        refresh: false
    }

    state = news_reducer(state, { type: "refreshNewsDB" });
    expect(state).toEqual({ news: [], refresh: true });
})

it("news setNewsState", () => {
    let state = {
        news: [],
        refresh: false
    }

    state = news_reducer(state, { type: "setNewsState", newState: [{ id: 0, name: "test", value: "test" }] });
    expect(state).toEqual({ news: [{ id: 0, name: "test", value: "test" }], refresh: false });
})

it("comments setCommentsState", () => {
    let state = {
        comments: [],
        checkerUpdate: false,
        commentsLength: 0,
        activePage: 1,
        actualCommentsPagesGroup: 10
    }

    state = comments_reducer(state, { type: "setCommentsState", newState: [{ text: "test", animeId: 1, id: 100 }] });
    expect(state).toEqual({
        comments: [{ text: "test", animeId: 1, id: 100 }], checkerUpdate: false,
        commentsLength: 0,
        activePage: 1,
        actualCommentsPagesGroup: 10
    })
})

it("comments refreshCommentsDB", () => {
    let state = {
        comments: [],
        checkerUpdate: false
    }

    state = comments_reducer(state, { type: "refreshCommentsDB" });
    expect(state).toEqual({ comments: [], checkerUpdate: true });
})

it("comments setAnimeIDCommentsLength", () => {
    let state = {
        comments: [],
        commentsLength: 0
    }

    state = comments_reducer(state, { type: "setAnimeIDCommentsLength", commentsLength: 10 });
    expect(state).toEqual({ comments: [], commentsLength: 10 });
})

it("comments setCommentsActivePage", () => {
    let state = {
        comments: [],
        activePage: 1
    }

    state = comments_reducer(state, { type: "setCommentsActivePage", activePage: 2 });
    expect(state).toEqual({ comments: [], activePage: 2 });
})

it("comments setActualCommentsPagesGroup", () => {
    let state = {
        comments: [],
        actualCommentsPagesGroup: 10
    }

    state = comments_reducer(state, { type: "setActualCommentsPagesGroup", actualCommentsPagesGroup: 20 });
    expect(state).toEqual({ comments: [], actualCommentsPagesGroup: 20 });
})