import { useState, useContext, useEffect } from "react"
import "./loginPop.css"
import {UserContext} from "../contexts/User"
import { Login } from "../contexts/Login"
import { getUsers } from "../api"
function LoginPop () {
    const [username, setUsername] = useState("")
    const {user, setUser} = useContext(UserContext)
    const {setLogin} = useContext(Login)
    const [invalidUser, setInvalidUser] = useState(true)
    const [validUsers, setValidUsers] = useState([])
    
    useEffect(() => {
        getUsers().then((users) => {
            setValidUsers(users)
        })

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const userObj = validUsers.find((validUser) => validUser.username === username)
        userObj ? setUser({...userObj, isLoggedIn: true}): setInvalidUser(false);
        userObj ? setLogin(false): setLogin(true)
        setUsername("")
    }
    return (
        <form className={`login-form`} onSubmit={handleSubmit}>
            <p onClick={(e) => {
                 setLogin(false)
            }}>x</p>
            <h2>log in</h2>
            <label>
                username
            </label>
            <input 
                type="text" 
                value={username} 
                placeholder="watson" 
                onChange={(e) => setUsername(e.target.value)}
                />
            <span>invalid user</span>
            <button type="submit">submit</button>
        </form>
    )
}

export default LoginPop