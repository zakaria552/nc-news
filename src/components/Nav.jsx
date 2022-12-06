import {Link} from 'react-router-dom';
import Header from './Header';
import {FormControlLabel, Switch} from '@mui/material';

import "./nav.css"
function Nav({toggleTheme, setToggleTheme}) {    
    const toggleHandle = () => {
        if(toggleTheme) {
            setToggleTheme(false)
        } else {
            setToggleTheme(true)
        }
    } 
    return (
        <ul className={`nav ${toggleTheme? "nav--light": ""}`}>
            <div className={`nav-left ${toggleTheme? "nav-left--light": ""}`}>
                <h1>nc-news</h1>
                <Link to="/">Home</Link>
                <Link>Articles</Link>
                <Link>Topics</Link>
            </div>
            <FormControlLabel control={<Switch color="primary" onChange={toggleHandle}/>} label={toggleTheme ? "light-mode": "dark-mode"}></FormControlLabel>
        </ul>
    )
}
export default Nav