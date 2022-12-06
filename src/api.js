import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://tame-ruby-cod-tie.cyclic.app/api"
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