import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://nc-news-api.up.railway.app/api"
})

export const getArticles = (params) => {
    return ncNews.get(`/articles`, {params})
        .then((res) => {
        return res.data.articles
    })
}

export const getArticleById = (article_id) => {
    return ncNews.get(`articles/${article_id}`).then((res) => {
        return res.data.article
    })
}
export const getComments = (article_id) => {
    return ncNews.get(`articles/${article_id}/comments`).then((res) => {
        return res.data.comments
    })
}
export const patchArticleVotes = (article_id, vote) => {
    const body  = {
        "inc_votes": vote
    }
    return ncNews.patch(`articles/${article_id}`, body).then((res) => {
        return res.data.article
    })
}

export const getUser = (username) => {
    return ncNews.get("/users").then((res) => {
        const user = res.data.users.filter((user) => { return user.username === username})
        return !user.length ? "not found": user[0] 
    })
}

export const postComment = (user, comment_body, article_id) => {
    const body = {
        username: user,
        body: comment_body
    }
    return ncNews.post(`/articles/${article_id}/comments`, body).then((res) => {
        return res.data.comment
    })
}

export const getUsers = () => {
    return ncNews.get("/users").then((res) => {
        return res.data.users
    })
}

export const deleteComment = (comment_id) => {
    return ncNews.delete(`/comments/${comment_id}`).then((res) => {
        return res.daata
    })
}
