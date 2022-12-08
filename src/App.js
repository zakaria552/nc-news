import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import {getArticles} from "./api"
import ArticlesList from './components/ArticlesList';
import PreviewArticle from './components/PreviewArticle';
import {useState} from "react"
import {UserContext} from "./contexts/User"
import {Login} from "./contexts/Login"
import LoginPop from './components/LoginPop';
import SingleTopic from './components/SingleTopic';
function App() {
  const [toggleTheme, setToggleTheme] = useState(false)
  const [user, setUser] = useState({isLoggedIn: false})
  const [login, setLogin] = useState(false)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Login.Provider value={{login, setLogin}}>
          <div className={`App ${toggleTheme ? "App--light": ""}`} >
            <Nav toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
            {login & !user.isLoggedIn ? <LoginPop></LoginPop>: ""}
            <Routes>
              <Route path="/" element={<ArticlesList/>}/>
              <Route path='/:article_id' element={<PreviewArticle toggleTheme={toggleTheme}/>}/>
              <Route path="/articles/:coding" element={<SingleTopic/>}/>
              <Route path="/articles/:cooking" element={<SingleTopic/>}/>
              <Route path="/articles/:football" element={<SingleTopic/>}/>
            </Routes>
          </div>
        </Login.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
