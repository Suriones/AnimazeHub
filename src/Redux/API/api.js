import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3001/"
})

export const newsAPI = {
    postNews(id, name) {
        return instance.post("newsData", { id: id, name: name });
    },
    getAll() {
        return instance.get("newsData").then(response => {
            return response.data;
        })
    }
}

export const animeAPI = {
    getAll() {
        return instance.get("animeData").then(response => {
            return response.data;
        })
    }
}

export const commentsAPI = {
    addCommentToAnimePage(text, animeID) {
        return instance.post("commentsData", { text: text, animeId: animeID, newsId: null });
    },
    showAnimeIdFirstCommentsPage(animeID) {
        return instance.get(`commentsData?animeId_like=${animeID}&_page=1&_limit=5`).then(response => {
            return response.data;
        });
    },
    showAnimeIdActiveCommentsPage(selectedPage, animeID) {
        return instance.get(`commentsData?animeId_like=${animeID}&_page=${selectedPage}&_limit=5`).then(response => {
            return response.data;
        })
    },
    showAnimeIdLastCommentsPage(animeID) {
        return instance.get(`commentsData?animeId_like=${animeID}`).then(response => {
            let numberOfPages = Math.ceil(response.data.length / 5);
            return instance.get(`commentsData?animeId_like=${animeID}&_page=${numberOfPages}&_limit=5`).then(response => {
                return { data: response.data, activePage: numberOfPages };
            })
        })
    },
    getAnimeIdCountComments(animeID) {
        return instance.get(`commentsData?animeId_like=${animeID}`).then(response => {
            return response.data.length;
        });
    }
}