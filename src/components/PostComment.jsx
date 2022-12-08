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
        setFailedToPost(false)
        if(!user.isLoggedIn) {
            setLogin(true)
        } else {
            postComment(user.username, comment, article_id).then((res) => {
                renderComments ? setRenderComments(false): setRenderComments(true)
                setComment("")
            }).catch(() => {
                console.log("failed to comment")
                setFailedToPost(true)
            })
        }
    }

    return (
        <div>
            <form className="comment__form" onSubmit={submitHandle}>
                <input
                    type="text"
                    className="comment__field" 
                    placeholder="leave a comment"
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                    required></input>
                <button type="submit" >post</button>
            </form>
        </div>
    )
}

export default PostComment