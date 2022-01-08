import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPost from './pages/BlogPost';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import ProjectPage from './pages/ProjectPage';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/blog/:name" element={<BlogPost />}/>
        <Route path="/work" element={<ProjectsPage />}/>
        <Route path="/work/:project" element={<ProjectPage />} />
        <Route
          path="*"
          element={
            <main>
              <p>404 Page Not Found</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
