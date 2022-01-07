import React from 'react';
import {
  Link
} from 'react-router-dom';

const MainMenu = () => (
    <>
        <nav>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
      </nav>
    </>
)

export default MainMenu;