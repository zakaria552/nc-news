import Filter from "./Filter"
import SingleTopic from "./SingleTopic"
import { useSearchParams } from "react-router-dom"
function SingleTopicContainer () {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = {sort_by: searchParams.get("sort_by"), order: searchParams.get("order")}
    return (
        <div className="singletopic__container">
            <Filter setSearchParams={setSearchParams} ></Filter>
            <SingleTopic params={params}/>
        </div>
    )
}

export default SingleTopicContainer