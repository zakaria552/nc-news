import { useState, useEffect } from "react"
import Article from "./Article"
import {getArticles} from "../api"
import "./articlesList.css"
import { CircularProgress } from '@mui/material'
import SortBy from "./SortBy"
function ArticlesList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getArticles().then((body) => {
            setIsLoading(true)
            setArticles(body)
            setIsLoading(false)
        })
    }, [])
    return isLoading ? <CircularProgress className="loading" />: (
        <div className="wrapper">
            <SortBy></SortBy>
            <ul className="article-list">
                { 
                articles.map((article) => {
                    return <Article key={article.article_id} article={article}></Article>
                })}
            </ul>
        </div>
    )
}

export default ArticlesList