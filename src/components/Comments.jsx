import { useEffect, useState } from "react"
import { getComments } from "../api"
import SingleComment from "./SingleComment"
import "./comments.css"
import { CircularProgress } from '@mui/material'

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
      <ul className="comments">
        {comments.map((comment) => {
          return <SingleComment comment={comment}/>
        })}  
      </ul>
  )
}

export default Comments