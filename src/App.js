import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import {getArticles} from "./api"
import ArticlesList from './components/ArticlesList';
import PreviewArticle from './components/PreviewArticle';
import {useState} from "react"
function App() {
  const [toggleTheme, setToggleTheme] = useState(false)
  return (
    <BrowserRouter>
      <div className={`App ${toggleTheme ? "App--light": ""}`} >
        {/* <Header></Header> */}
        <Nav toggleTheme={toggleTheme} setToggleTheme={setToggleTheme}/>
        <Routes>
          <Route path="/" element={<ArticlesList/>}/>
          <Route path='/articles/:article_id' element={<PreviewArticle toggleTheme={toggleTheme}/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
