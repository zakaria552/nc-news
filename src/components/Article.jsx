import "./articlesList.css"

function Article({article}) {
    return (
        <li className="article">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>{article.created_at}</p>
            <div className="vote-container">
                <p>votes: {article.votes}</p>
                <button>vote up</button>
                <button>vote down</button>
            </div>
        </li>
    )
}

export default Article