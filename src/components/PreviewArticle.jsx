import { useEffect, useState } from "react"
import {params, useParams} from "react-router-dom"
import {getArticleById} from "../api"
import Comments from "./Comments"
import LikeArticle from "./LikeArticle"
import "./previewArticle.css"
function PreviewArticle() {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
        })
    }, [article_id])
    return (
        <div className="preview-container">
            <div className="article-preview">
                <div className="article__profile">
                    <img alt="author_img" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0=" ></img>
                    <div>
                    <h4>{article.author}</h4>
                        <i>posted at {article.created_at}</i>
                    </div>
                </div>
                <div className="article-preview__body">
                    <h5>{article.title}</h5>
                    <p>{article.body}</p>
                </div>
                <LikeArticle article={article}></LikeArticle>
                <Comments article_id={article_id}></Comments>
            </div>
            <div className="articles">
                <h5>more articles</h5>
            </div>
        </div>
    )
}

export default PreviewArticle