import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortUp, faSortDown, faArrowUpWideShort, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useContext } from "react"
import "./filter.css"
import { ThemeContext } from "../contexts/Theme"
import Form from 'react-bootstrap/Form';

function Filter({setSearchParams}) {
    const [order, setOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("") 
    const {toggleTheme} = useContext(ThemeContext)
    console.log(toggleTheme)
    useEffect(() => {
        sortBy.length ? setSearchParams({sort_by: sortBy, order: order}): setSearchParams({})
    }, [sortBy, order])
    const handleChange = (e) => {
        setSortBy(e.target.value)
    }
    const handleClick = () => {
        order === "desc" ? setOrder("asc"): setOrder("desc")
    }
    return (
        <div className={`filter-container ${toggleTheme ? "light": ""}`}>
             <select className="selecter" aria-label="sort articles by"
                onChange={handleChange}
             >
                <option value="">Sort articles by</option>
                <option value="created_at">Upload date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
            </select>
            <button onClick={handleClick} role="img">{order === "desc" ? <FontAwesomeIcon icon={faArrowDownWideShort}/>: <FontAwesomeIcon icon={faArrowUpWideShort}/>}</button>
        </div>
    )
}
export default Filter