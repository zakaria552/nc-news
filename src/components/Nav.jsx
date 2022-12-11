import {Link} from 'react-router-dom';
import Header from './Header';
import {FormControlLabel, Switch} from '@mui/material';
import { UserContext } from '../contexts/User';
import { Login } from '../contexts/Login';
import "./nav.css"
import { useContext, useState } from 'react';
import LoginPop from './LoginPop';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../contexts/Theme';
function Nav() {  
    const {user} = useContext(UserContext)
    const {login, setLogin} = useContext(Login)
    const {toggleTheme, setToggleTheme} = useContext(ThemeContext)

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
                <Link to="/">Articles</Link>
                <Link to="articles/topics/coding">Coding</Link>
                <Link to="articles/topics/cooking">Cooking</Link>
                <Link to="articles/topics/football">Football</Link>
            </div>
            <div className={`nav-right ${toggleTheme? "nav-right--light": ""}`}>
                {user.isLoggedIn ? (
                    <div className='account'>
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