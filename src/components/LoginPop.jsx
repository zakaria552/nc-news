import { useState, useContext } from "react"
import "./loginPop.css"
import {UserContext} from "../contexts/User"
function LoginPop () {
    const [username, setUsername] = useState("")
    const {user, setUser} = useContext(UserContext)
    const loginPop = document.getElementsByClassName("login-form")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username: username, isLoggedIn: true})
        console.log("created account")
        console.dir(e.target.value)
        e.target.style.display = "none"
        setUsername("")
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <p onClick={(e) => {
                 console.dir(e.target)
                 loginPop["0"].style.display = "none"
            }}>x</p>
            <h2>create accoutn</h2>
            <label>
                username
            </label>
            <input 
                type="text" 
                value={username} 
                placeholder="watson" 
                onChange={(e) => setUsername(e.target.value)}
                />
            <button type="submit">submit</button>
        </form>
    )
}

export default LoginPop