import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

const Nav = () => (
  <nav>
    <ul >
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/orders'>Orders</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
