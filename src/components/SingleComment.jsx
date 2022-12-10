import "./comments.css"
import {formatDate} from "../utils"
import {LikeArticle, LikeComment} from "./LikeArticle"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/User"
import { getUser, deleteComment } from "../api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeContext } from "../contexts/Theme"

function SingleComment({comment, comments, setComments}) {
    const [author, setAuthor] = useState({})
    const [authorName, setAuthorName] = useState(comment.author)
    const {user} = useContext(UserContext)
    const {toggleTheme} = useContext(ThemeContext)

    const deleteHandle = () => {
        deleteComment(comment.comment_id).then((res) => {
            const newComment = comments.filter((co) => co.comment_id !== comment.comment_id)
            console.log("deleted comment")
            setComments(newComment)
        })
    }
    useEffect(() => {
        getUser(comment.author).then((user) => {
            setAuthor(user)
        })
    }, [])
    return (
        <li className={`comment ${toggleTheme ? "comment--light" : ""}`}>
            <div className={`comment__profile ${toggleTheme ? "comment__profile--light" : ""}`}>
                <img id="comment__avatar" 
                    alt="user-avatar" 
                    src={author.avatar_url}
                ></img>
                <h6>{comment.author}</h6>
                <i className={`${toggleTheme ? "comment__profile__date--light" : ""}`}> · {formatDate(comment.created_at).getDate}</i>
                <div 
                className={`comment__delete ${user.isLoggedIn & user.username === comment.author ? "comment__delete--show" : ""}`}>
                    <span role="img" onClick={deleteHandle}>🗙</span>
                </div>
            </div>
            <div className="comment__body">
                <p>{comment.body}</p>
                <LikeComment comment={comment}></LikeComment>
            </div>
        </li>
    )
}

export default SingleComment