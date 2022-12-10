import { useContext, useEffect, useState } from "react"
import { getComments } from "../api"
import SingleComment from "./SingleComment"
import "./comments.css"
import { CircularProgress } from '@mui/material'
import PostComment from "./PostComment"
import { ThemeContext } from "../contexts/Theme"

function Comments({article_id}) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [failedToPost, setFailedToPost] = useState(false)
  const [renderComments, setRenderComments] = useState(false)
  const {toggleTheme} = useContext(ThemeContext)
  useEffect(() => {
    setIsloading(true)
    getComments(article_id).then((comments) => {
        setComments(comments)
        setIsloading(false)
    })
  }, [article_id, renderComments])
  return isLoading ? <CircularProgress id="comment_loading" /> :  (
    <div>

        <PostComment article_id = {article_id} setFailedToPost={setFailedToPost} renderComments={renderComments} setRenderComments={setRenderComments} comments={comments} setComments={setComments}></PostComment>
        {failedToPost ? <span>failed to post, try again</span>: ""}
      <ul className="comments">
        {comments.map((comment) => {
          return <SingleComment  key={comment.created_at} setComments={setComments} comments={comments} comment={comment}/>
        })}  
      </ul>
    </div>
  )
}

export default Comments