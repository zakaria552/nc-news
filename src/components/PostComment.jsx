import {useState, useContext} from "react"
import "./postComment.css"
import {UserContext} from "../contexts/User"
import { Login } from "../contexts/Login"
import { postComment } from "../api"
function PostComment({article_id, setRenderComments, renderComments, setFailedToPost}){
    const [comment, setComment] = useState("")
    const {user} = useContext(UserContext)
    const {setLogin} = useContext(Login)
    const submitHandle = (e) => {
        e.preventDefault()
        e.target.disabled = true
        setFailedToPost(false)
        if(!user.isLoggedIn) {
            setLogin(true)
            e.target.disabled = false

        } else {
            postComment(user.username, comment, article_id).then((res) => {
                renderComments ? setRenderComments(false): setRenderComments(true)
                setComment("")
                e.target.disabled = false
            }).catch(() => {
                console.log("failed to comment")
                setFailedToPost(true)
                e.target.disabled = false
            })
        }
    }

    return (
        <div>
            <form className="comment__form" >
                <textarea
                    type="text"
                    className="comment__field" 
                    placeholder="Write a comment"
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    required
                    
                    ></textarea>
                <button type="button" onClick={submitHandle}>post</button>
            </form>
        </div>
    )
}

export default PostComment