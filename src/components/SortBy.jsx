import "./sortBy.css"
import {useState} from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


function SortBy() {
    const [sortBy, setSortBy] = useState("") 
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
                    onChange={(e) => console.log(e.target.value)}
                    >
                    <MenuItem value={10}>Upload date</MenuItem>
                    <MenuItem value={20}>Comment count</MenuItem>
                    <MenuItem value={30}>Votes</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FormControl id="filter-radio">
                <FormLabel className="sort-radio-label" id="demo-radio-buttons-group-label">Order</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="decs"
                    name="radio-buttons-group"
                >
                    <FormControlLabel id="sort-radio" value="decs" control={<Radio />} label="decs" />
                    <FormControlLabel id="sort-radio" value="asc" control={<Radio />} label="asc" />
                </RadioGroup>
            </FormControl>
        </div>
      );
}

export default SortBy