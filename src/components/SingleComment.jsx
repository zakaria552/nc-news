import "./comments.css"
import {formatDate} from "../utils"
import LikeArticle from "./LikeArticle"
function SingleComment({comment}) {
    return (
        <li className="comment">
            <div className="comment__profile">
                <img id="comment__avatar" alt="user-avatar" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="></img>
                <h6>{comment.author}</h6>
                <i> · {formatDate(comment.created_at).getDate}</i>
            </div>
            <div className="comment__body">
                <p>{comment.body}</p>
                <LikeArticle article={comment}></LikeArticle>
            </div>
        </li>
    )
}

export default SingleComment