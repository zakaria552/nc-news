import { useParams } from "react-router"
import {useEffect, useState} from "react"
import { getArticlesByTopic, getArticles } from "../api"
import Article from "./Article"
import { CircularProgress } from '@mui/material'
import "./singleTopic.css"
function SingleTopic ({params}) {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const param = useParams()
    useEffect(() => {
        getArticles({...params, ...param}).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [param.topic, params])
    return isLoading ? <CircularProgress className="loading" />: (
        <div className="single-topic">
            <h2>{`Articles relating to ${param.topic}`}</h2>
        <ul className="article-list">
            { 
            articles.map((article) => {
                return <Article key={article.article_id} article={article}></Article>
            })}
        </ul>
        </div>
    )
}

export default SingleTopic