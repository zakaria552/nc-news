import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import PreviewArticle from './components/PreviewArticle';
import {useState} from "react"
import {UserContext} from "./contexts/User"
import {Login} from "./contexts/Login"
import { ThemeContext } from './contexts/Theme';
import LoginPop from './components/LoginPop';
import SingleTopic from './components/SingleTopic';
import ArticlesContainer from './components/ArticlesContainer';
import SingleTopicContainer from './components/SingleTopicContainer';
function App() {
  const [toggleTheme, setToggleTheme] = useState(false)
  const [user, setUser] = useState({isLoggedIn: false})
  const [login, setLogin] = useState(false)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Login.Provider value={{login, setLogin}}>
          <ThemeContext.Provider value={{toggleTheme, setToggleTheme}}>
            <div className={`App ${toggleTheme ? "App--light": ""}`} >
              <Nav toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
              {login & !user.isLoggedIn ? <LoginPop></LoginPop>: ""}
              <Routes>
                <Route path="/" element={<ArticlesContainer/>}/>
                <Route path='articles/:article_id' element={<PreviewArticle toggleTheme={toggleTheme}/>}/>
                <Route path="articles/topics/:topic" element={<SingleTopicContainer/>}/>
              </Routes>
            </div>
          </ThemeContext.Provider>
        </Login.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
