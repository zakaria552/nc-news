import "./articlesList.css"
import {Link} from "react-router-dom"
function Article({article}) {
    return (
        <li className="article">
            <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link>
            <p>{article.author}</p>
            <p>{article.created_at}</p>
            <div className="vote-container">
                <p>votes: {article.votes}</p>
                <button>vote up</button>
                <button>vote down</button>
            </div>
        </li>
    )
}

export default Article