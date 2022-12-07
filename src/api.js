import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://inquisitive-cyan-gabardine.cyclic.app/api"
})

export const getArticles = () => {
    return ncNews.get("/articles")
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
        console.log(user, "user array")
        return !user.length ? {avatar_url: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="}: user[0] 
    })
}

export const postComment = (user, comment_body, article_id) => {
    const body = {
        username: user,
        body: comment_body
    }
    console.log(body, "body")
    return ncNews.post(`/articles/${article_id}/comments`, body).then((res) => {
        console.log(res.data.comment, "post api")
        console.log(res.data)
        return res.data.comment
    })
}
