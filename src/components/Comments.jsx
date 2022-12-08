import { useEffect, useState } from "react"
import { getComments } from "../api"
import SingleComment from "./SingleComment"
import "./comments.css"
import { CircularProgress } from '@mui/material'
import PostComment from "./PostComment"

function Comments({article_id}) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    setIsloading(true)
    getComments(article_id).then((comments) => {
        setComments(comments)
        setIsloading(false)
    })
  }, [article_id])
  return isLoading ? <CircularProgress id="comment_loading" /> :  (
    <div>

        <PostComment article_id = {article_id} comments={comments} setComments={setComments}></PostComment>
      <ul className="comments">
        {comments.map((comment) => {
          return <SingleComment key={comment.created_at} comment={comment}/>
        })}  
      </ul>
    </div>
  )
}

export default Comments