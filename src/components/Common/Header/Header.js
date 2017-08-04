import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>	
      <h1>Minimalistic Boilerplate</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
	);
}

export default Header;