import "./sortBy.css"
import {useEffect, useState} from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


function SortBy({setSearchParams}) {
    const [sortBy, setSortBy] = useState("") 
    const [order, setOrder] = useState("desc")

    useEffect(() => {
        sortBy.length ? setSearchParams({sort_by: sortBy, order: order}): setSearchParams({})
    }, [sortBy, order])
    const handleChange = (e) => {
        setSortBy(e.target.value)
    }
    return (
        <div className="filter">
            <h2>Filter</h2>
            <Box sx={{ width: 150 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortBy}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={"created_at"}>Upload date</MenuItem>
                    <MenuItem value={"comment_count"}>Comment count</MenuItem>
                    <MenuItem value={"votes"}>Votes</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FormControl id="filter-radio">
                <FormLabel className="sort-radio-label" id="demo-radio-buttons-group-label">Order</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={order}
                    name="radio-buttons-group"
                    onChange={(e) => {
                        console.log(order,)
                        setOrder(e.target.value)
                    }}
                >
                    <FormControlLabel id="sort-radio" value="desc" control={<Radio />} label="descending " />
                    <FormControlLabel id="sort-radio" value="asc" control={<Radio />} label="ascending" />
                </RadioGroup>
            </FormControl>
        </div>
      );
}

export default SortBy