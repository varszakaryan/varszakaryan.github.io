import React from "react";
import './OwnerCard.css';
import varser from '../varser.HEIC';
import Socials from './Socials.js';

const OwnerCard = () => {
  return (
      <div className='ownerCard'>
        <img src={varser} className="ownerImg" alt="Varser" />
        <h1>Varser Zakaryan</h1>
        <div className='placeholderBlue'></div>
        <p className='textStyle'>JAVASCRIPT LOVER</p>
        <Socials />
      </div>
  )

}

export default OwnerCard;