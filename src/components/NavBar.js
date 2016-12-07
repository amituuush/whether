import React from 'react';
import styles from '../../style/style.scss';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-full">
    <div className="nav-container">
    <a className="navbar-brand" href="#">Whether</a>
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">More</a>
      </li>
    </ul>
    </div>
  </nav>
);

export default NavBar;
