import { useState, useEffect } from "react"
import Article from "./Article"
import {getArticles} from "../api"
import "./articlesList.css"
import { CircularProgress } from '@mui/material'
import { useSearchParams, useParams } from "react-router-dom"
function ArticlesList({params}) {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        setIsLoading(true)
        getArticles(params).then((body) => {
            setArticles(body)
            setIsLoading(false)
        })
    }, [searchParams])
    return isLoading ? <CircularProgress className="loading" />: (
        <div className="wrapper">
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