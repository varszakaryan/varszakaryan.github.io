import React from "react";
import './Navigation.css';
import {Link}  from "react-router-dom";

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='tag' to='/'>ABOUT ME</Link>
      <Link className='tag' to='/events'>EVENTS</Link>
      <Link className='tag' to='/contacts'>CONTACTS</Link>
    </div>
  )
}

export default Navigation;