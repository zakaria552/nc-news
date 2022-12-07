import { useState } from "react";
import "./likeArticle.css"
import {patchArticleVotes} from "../api"
export const LikeArticle = ({article}) => {
    const article_id = article.article_id
    const [vote, setVote] = useState(0) // innitially vote is set to zero
    const [votes, setVotes] = useState(article.votes)
    const handleLike = () => {
        vote === 0 ? setVote(1): vote === 1? setVote(0): setVote(1)
        vote === 1 ? patchArticleVotes(article_id, -1): (vote === -1 ? 
            patchArticleVotes(article_id, 2): patchArticleVotes(article_id, 1))
        

        
    }
    const handleDislike = () => {
        console.log(article_id)
        vote === 0 ? setVote(-1): vote === -1 ? setVote(0): setVote(-1)
        vote === -1 ? patchArticleVotes(article_id, 1): (vote === 1 ?
            patchArticleVotes(article_id, -2): patchArticleVotes(article_id, -1) )


    }
    return (
        <div className="like-container">
            <p>votes: {votes + vote}</p>
            <button className={`article__like ${vote === 1 ? "article__like--active": ""}`} onClick={handleLike}>👍</button>
            <button className={`article__dislike  ${vote === -1 ? "article__dislike--active": ""}`} onClick={handleDislike}>👎</button>
        </div>
    )
}
export const LikeComment = ({comment}) => {
    const [vote, setVote] = useState(0)
    console.log(comment.votes)
    const [commentVotes, setCommentVotes] = useState(comment.votes)
    console.log(commentVotes, "votes of posted comment", comment.author)
    const handleLike = () => {
        vote === 1 ? setVote(0): setVote(1);
    }
    const handleDislike = () => {
        vote === -1 ? setVote(0): setVote(-1)
    }
    return (
        <div className="like-container">
            <p>votes: {commentVotes}</p>
            <button className="article__like" >👍</button>
            <button className="article__dislike" >👎</button>
        </div>
    )
}
