import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import {getArticles} from "./api"
import ArticlesList from './components/ArticlesList';
import PreviewArticle from './components/PreviewArticle';
import {useState} from "react"
import {UserContext} from "./contexts/User"
import LoginPop from './components/LoginPop';
function App() {
  const [toggleTheme, setToggleTheme] = useState(false)
  const [user, setUser] = useState({isLoggedIn: false})
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <div className={`App ${toggleTheme ? "App--light": ""}`} >
          {/* <Header></Header> */}
          <Nav toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
          <Routes>
            <Route path="/" element={<ArticlesList/>}/>
            <Route path='/articles/:article_id' element={<PreviewArticle toggleTheme={toggleTheme}/>}/>
            <Route path="/topics" element={<LoginPop/>}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
