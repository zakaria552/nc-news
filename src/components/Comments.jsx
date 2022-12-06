import { useEffect, useState } from "react"
import { getComments } from "../api"
import SingleComment from "./SingleComment"

function Comments({article_id}) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
        })
    }, [])
    return (
        <ul>
          {comments.map((comment) => {
            <SingleComment comment={comment}/>
          })}  
        </ul>
    )
}

export default Comments