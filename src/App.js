import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import {getArticles} from "./api"
import ArticlesList from './components/ArticlesList';
import PreviewArticle from './components/PreviewArticle';
function App() {
  getArticles()
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Nav/>
        <Routes>
          <Route path="/" element={<ArticlesList/>}/>
          <Route path='/articles/:article_id' element={<PreviewArticle/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
