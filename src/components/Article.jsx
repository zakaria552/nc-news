import "./articlesList.css"
import {Link} from "react-router-dom"
import {LikeArticle} from "./LikeArticle"
import {formatDate} from "../utils"
import { ThemeContext } from "../contexts/Theme"
import { useContext } from "react"
function Article({article}) {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <li className={`article ${toggleTheme? "article--light": ""}`}>
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