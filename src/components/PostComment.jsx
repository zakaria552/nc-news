import {useState, useContext} from "react"
import "./postComment.css"
import {UserContext} from "../contexts/User"
import LoginPop from "./LoginPop"
import { postComment } from "../api"
function PostComment({comments, setComments, article_id}){
    const [comment, setComment] = useState("")
    const {user, setUser} = useContext(UserContext)
    const loginPop = document.getElementsByClassName("login-form")
    const submitHandle = (e) => {
        e.preventDefault()
        console.log(user)
        if(!user.isLoggedIn) {
            loginPop["0"].style.display = "block"
        } else {
            const commentObj = {author: user.username, body: comment, votes: 0, created_at: new Date()}
            setComments([commentObj, ...comments])
            postComment(user.username, comment, article_id).then((res) => {
                console.log(res)
            })
        }
        setComment("")
    }
    const func = (e) => {
        console.dir(e.target.scrollHeight)
        e.target.style.height = e.target.scrollHeight + "px"
    }
    return (
        <div>
            <LoginPop></LoginPop>
            <form className="comment__form" onSubmit={submitHandle}>
                <input
                    type="text"
                    className="comment__field" 
                    placeholder="leave a comment"
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    required></input>
                <button type="submit">post</button>
            </form>
        </div>
    )
}

export default PostComment