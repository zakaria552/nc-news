import { useParams } from "react-router"
function SingleTopic () {
    const [articles, setArticle] = useState()
    const topic = Object.keys(useParams())[0]
    
    return (
        <div>
            fetching coding related articles
        </div>
    )
}

export default SingleTopic