import "./comments.css"
import {formatDate} from "../utils"
import {LikeArticle, LikeComment} from "./LikeArticle"
import { useEffect, useState } from "react"
import { getUser } from "../api"
function SingleComment({comment}) {
    const [author, setAuthor] = useState({})
    const [authorName, setAuthorName] = useState(comment.author)
    useEffect(() => {
        getUser(comment.author).then((user) => {
            setAuthor(user)
        })
    }, [])
    return (
        <li className="comment">
            <div className="comment__profile">
                <img id="comment__avatar" 
                    alt="user-avatar" 
                    src={author.avatar_url}
                ></img>
                <h6>{comment.author}</h6>
                <i> · {formatDate(comment.created_at).getDate}</i>
            </div>
            <div className="comment__body">
                <p>{comment.body}</p>
                <LikeComment comment={comment}></LikeComment>
            </div>
        </li>
    )
}

export default SingleComment