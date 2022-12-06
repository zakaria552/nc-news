import "./articlesList.css"
import {Link} from "react-router-dom"
import LikeArticle from "./LikeArticle"
function Article({article}) {
    return (
        <li className="article">
            <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link>
            <p>by {article.author}</p>
            <p>{article.created_at}</p>
            <div className="vote-container">
                <p>{article.comment_count} comment</p>
                <LikeArticle article={article}></LikeArticle>
            </div>
        </li>
    )
}

export default Article