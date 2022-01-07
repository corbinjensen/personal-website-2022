import React from 'react';
import './App.css';
import { render } from "react-dom";
import {
  Link
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <nav>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
      </nav>
    </div>
  );
}

export default App;
