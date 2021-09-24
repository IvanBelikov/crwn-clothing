import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Navbar.styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <nav className="navigation">
        <Link className="navbar-option" to="/">
          Home
        </Link>
        <Link className="navbar-option" to="/shop">
          Shop
        </Link>
        <Link className="navbar-option" to="/auth">
          Log in
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
