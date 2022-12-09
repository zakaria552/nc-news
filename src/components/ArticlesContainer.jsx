import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy";

function ArticlesContainer( ) {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = {sort_by: searchParams.get("sort_by"), order: searchParams.get("order")}
    return (
        <div>
            <SortBy setSearchParams={setSearchParams}></SortBy>
            <ArticlesList searchParams={searchParams} params={params}></ArticlesList>
        </div>
    )
}

export default ArticlesContainer