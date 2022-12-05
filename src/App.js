import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import {getArticles} from "./api"
import ArticlesList from './components/ArticlesList';
function App() {
  getArticles()
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Nav/>
        <ArticlesList></ArticlesList>
      </div>
    </BrowserRouter>
  );
}

export default App;
