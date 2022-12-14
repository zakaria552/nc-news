import { useState, useContext, useEffect } from "react"
import "./loginPop.css"
import {UserContext} from "../contexts/User"
import { Login } from "../contexts/Login"
import { getUsers } from "../api"
function LoginPop () {
    const [username, setUsername] = useState("")
    const {user, setUser} = useContext(UserContext)
    const {setLogin} = useContext(Login)
    const [invalidUser, setInvalidUser] = useState(false)
    const [validUsers, setValidUsers] = useState([])
    
    useEffect(() => {
        getUsers().then((users) => {
            setValidUsers(users)
        })

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const userObj = validUsers.find((validUser) => validUser.username === username)
        userObj ? setUser({...userObj, isLoggedIn: true}): setInvalidUser(true);
        userObj ? setLogin(false): setLogin(true)
        setUsername("")
    }
    return (
        <form className={`login-form`} onSubmit={handleSubmit}>
            <p onClick={(e) => {
                 setLogin(false)
            }}>x</p>
            <h1>log in</h1>
            <label>
                username
            </label>
            <input 
                type="text" 
                value={username} 
                placeholder="grumpy19" 
                onChange={(e) => setUsername(e.target.value)}
                />
            
            {invalidUser ? <span>invalid user</span> : "" }
            <button type="submit">submit</button>
                <h2>available users in the database</h2>
                <div>
                    {validUsers.map((user) => {
                        return <h4>{user.username}</h4>
                    })}
                </div>
        </form>
    )
}

export default LoginPop