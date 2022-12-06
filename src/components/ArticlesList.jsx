import { useState, useEffect } from "react"
import Article from "./Article"
import {getArticles} from "../api"
import "./articlesList.css"
function ArticlesList() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then((body) => {
            setArticles(body)
        })
    }, [])
    return (
        <ul className="article-list">
            { 
            articles.map((article) => {
                return <Article key={article.article_id} article={article}></Article>
            })}
        </ul>
    )
}

export default ArticlesList