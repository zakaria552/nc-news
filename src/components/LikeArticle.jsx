import "./likeArticle.css"
function LikeArticle ({article}) {

    return (
        <div className="like-container">
            <p>votes: {article.votes}</p>
            <button className="article__like">👍</button>
            <button className="article__dislike">👎</button>
        </div>
    )
}

export default LikeArticle;