import {Link} from 'react-router-dom';
import Header from './Header';
import {FormControlLabel, Switch} from '@mui/material';
import { UserContext } from '../contexts/User';
import "./nav.css"
import { useContext } from 'react';
import LoginPop from './LoginPop';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee, faSolid,  faUser} from '@fortawesome/free-solid-svg-icons'
function Nav({toggleTheme, setToggleTheme}) {  
    const {user} = useContext(UserContext)
    const loginPop = document.getElementsByClassName("login-form")
  
    const toggleHandle = () => {
        if(toggleTheme) {
            setToggleTheme(false)
        } else {
            setToggleTheme(true)
        }
    } 
    const signHandler = (e) => {
        loginPop["0"].style.display = "block"
    }
    return (
        <ul className={`nav ${toggleTheme? "nav--light": ""}`}>
            <LoginPop></LoginPop>
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
                        <img alt="profile-picture" src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="}></img>
                    </div>
                )
                
                : <Link onClick={signHandler}>Log in</Link>}
                <FormControlLabel control={<Switch color="primary" onChange={toggleHandle}/>} label={toggleTheme ? "light-mode": "dark-mode"}></FormControlLabel>
            </div>
        </ul>
    )
}
export default Nav