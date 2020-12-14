import React from 'react';
import Owner from './Owner';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Owner />
      <Navigation />
    </div>
  )
}

export default Header;