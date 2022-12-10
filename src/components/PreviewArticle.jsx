import { useEffect, useState, useContext } from "react"
import {params, useParams} from "react-router-dom"
import {getArticleById, getComments, getUser} from "../api"
import Comments from "./Comments"
import {LikeArticle} from "./LikeArticle"
import "./previewArticle.css"
import { CircularProgress } from '@mui/material'
import {formatDate} from "../utils"
import ArticlesList from "./ArticlesList"
import {UserContext} from "../contexts/User"
import { ThemeContext } from "../contexts/Theme"
function PreviewArticle() {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)
    const [author, setAuthor] = useState({})
    const {user, setUser} = useContext(UserContext)
    const {toggleTheme} = useContext(ThemeContext)

    useEffect(() => {
        console.log(user)
        setIsLoading(true)
        setShowComments(false)
        getArticleById(article_id).then((article) => {
            setArticle(article)
            return getUser(article.author)
        }).then((user) => {
            setAuthor(user)
            setIsLoading(false)
        })
    }, [article_id])
    return isLoading ? <CircularProgress className="loading" /> : (
        <div className={`preview-container ${toggleTheme ? "preview-container--light" : ""}`}>
            <div className={`article-preview ${toggleTheme ? "article-preview--light" : ""}`}>
                <div className={`article__profile ${toggleTheme ? "article__profile--light" : ""}`}>
                    <img alt="author_img" src={author.avatar_url} ></img>
                    <div>
                    <h4>{article.author}</h4>
                    <i>{formatDate(article.created_at).getTime} · {formatDate(article.created_at).getDate}</i>
                    </div>
                </div>
                <div className="article-preview__body">
                    <h5>{article.title}</h5>
                    <p>{article.body}</p>
                </div>
                <div className="comment-like-container">
                    <p
                        className="comment_button" 
                        onClick={() => setShowComments(true)}>💬 Comments
                    </p>
                    <LikeArticle article={article}></LikeArticle>
                </div>
                {showComments ? <Comments article_id={article_id}/>: ""}
            </div>
            <div className="more__articles">
                <h2>More relevent articles</h2>
                <ArticlesList/>
            </div>
        </div>
    )
}

export default PreviewArticle