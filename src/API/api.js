import axios from 'axios';

const firebase = axios.create({
    baseURL: "https://otakuhub-c62f0-default-rtdb.europe-west1.firebasedatabase.app/"
})

export const authAPI = {
    async getAll() {
        return firebase.get("Users.json").then(response => response.data);
    },
    registerUser(user) {
        return firebase.post("Users.json", { login: user.login, password: user.password, admin: user.admin, likedAnime: user.likedAnime });
    },
    async likeAnime(userID, animeID) {
        const actualLikeCount = await firebase.put(`AnimeList/${animeID}/like.json`, { '.sv': { increment: +1 } });
        const likeID = await firebase.post(`Users/${userID}/likedAnime.json`, { animeID: animeID });
        return { likeID: likeID.data.name, actualLikeCount: actualLikeCount.data };
    },
    async unlikeAnime(userID, likeID, animeID) {
        const actualLikeCount = await firebase.put(`AnimeList/${animeID}/like.json`, { '.sv': { increment: -1 } });
        await firebase.delete(`Users/${userID}/likedAnime/${likeID}.json`);
        return actualLikeCount.data;
    }
}

export const newsAPI = {
    async getAll() {
        return firebase.get("NewsList.json").then(response => response.data);
    },
    postNews(value, username, time, title) {
        return firebase.post("NewsList.json", { value: value, username: username, time: time, title: title });
    }
}

export const reviewAPI = {
    async getAll() {
        return firebase.get("Review.json").then(response => response.data);
    },
    postReview(review) {
        return firebase.post("Review.json", { content: review.content, username: review.username, time: review.time, title: review.title, smallImageURL: review.smallImageURL, fullImageURL: review.fullImageURL });
    }
}

export const animeAPI = {
    async getAll() {
        return firebase.get("AnimeList.json").then(response => response.data);
    },
    postAnime(anime) {
        return firebase.post("AnimeList.json", { name: anime.name, img: anime.img, description: anime.description, trailer: anime.trailer, year: anime.year, country: anime.country, genre: anime.genre, like: anime.like });
    }
}

export const commentsAPI = {
    async postComment(text, key, type, username, time) {
        return firebase.post(type + key + "/comments.json", { text: text, username: username, time: time });
    },
    async getAll(type, key) {
        return firebase.get(type + key + "/comments.json").then(response => response.data);
    }
}