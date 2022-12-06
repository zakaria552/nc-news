import { useState, useEffect } from "react"
import Article from "./Article"
import {getArticles} from "../api"
import "./articlesList.css"
import { CircularProgress } from '@mui/material'
function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getArticles().then((body) => {
            setArticles(body)
            setIsLoading(false)
        })
    }, [])
    return isLoading ? <CircularProgress className="loading" />: (
        <ul className="article-list">
            { 
            articles.map((article) => {
                return <Article key={article.article_id} article={article}></Article>
            })}
        </ul>
    )
}

export default ArticlesList