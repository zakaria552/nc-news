import "./articlesList.css"
import {Link} from "react-router-dom"
import {LikeArticle} from "./LikeArticle"
import {formatDate} from "../utils"
import { CircularProgress } from '@mui/material'

function Article({article}) {
    console.log(article.created_at)
    return (
        <li className="article">
            <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link>
            <p>by {article.author}</p>
            <p>{formatDate(article.created_at).getDate}</p>
            <div className="vote-container">
                <p>{article.comment_count} comment</p>
                <LikeArticle article={article}></LikeArticle>
            </div>
        </li>
    )
}

export default Article