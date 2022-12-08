import {Link} from 'react-router-dom';
import Header from './Header';
import {FormControlLabel, Switch} from '@mui/material';
import { UserContext } from '../contexts/User';
import { Login } from '../contexts/Login';
import "./nav.css"
import { useContext, useState } from 'react';
import LoginPop from './LoginPop';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee, faSolid,  faUser} from '@fortawesome/free-solid-svg-icons'
function Nav({toggleTheme, setToggleTheme}) {  
    const {user} = useContext(UserContext)
    const {login, setLogin} = useContext(Login)

    const toggleHandle = () => {
        if(toggleTheme) {
            setToggleTheme(false)
        } else {
            setToggleTheme(true)
        }
    } 
    const signHandler = (e) => {
        setLogin(true)
    }
    return (
        <ul className={`nav ${toggleTheme? "nav--light": ""}`}>
            <div className={`nav-left ${toggleTheme? "nav-left--light": ""}`}>
                <h1>nc-news</h1>
                <Link to="/">Home</Link>
                <Link>Articles</Link>
                <Link to="/topics">Topics</Link>
                <i class="fa-light fa-user"></i>
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon="fa-light fa-user" />
            </div>
            <div className="nav-right">
                {user.isLoggedIn ? (
                    <div className='account'>
                        <i class="fa-light fa-user"></i>
                        <h3>{user.username}</h3>
                        <img alt="profile-picture" src={user.avatar_url}></img>
                    </div>
                )
                
                : <Link onClick={signHandler}>Log in</Link>}
                <FormControlLabel control={<Switch color="primary" onChange={toggleHandle}/>} label={toggleTheme ? "light-mode": "dark-mode"}></FormControlLabel>
            </div>
        </ul>
    )
}
export default Nav