import React from "react";
import './Homepage.css';
import OwnerCard from "./OwnerCard";
import OwnerInfo from "./OwnerInfo";

const Homepage = () => {

  return (
    <div className='homepage'>
      <div className='background'></div>
      <OwnerCard />
      <OwnerInfo />
    </div>
  )

}

export default Homepage