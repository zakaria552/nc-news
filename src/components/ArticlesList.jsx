import { useState, useEffect } from "react"
import Article from "./Article"
import {getArticles} from "../api"
import "./articlesList.css"
function ArticlesList() {
    console.log("??")
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        console.log("rendeing first")
        getArticles().then((body) => {
            console.log(body)
            setArticles(body)
        })
    }, [])
    console.log("then")
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