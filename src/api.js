import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://tame-ruby-cod-tie.cyclic.app/api"
})

export const getArticles = () => {
    return ncNews.get("/articles").then((res) => {
        return res.data.articles
    })
}