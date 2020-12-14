import React from "react";
import './Footer.css';
import Socials from './Socials.js';

const Footer = () => {
  return (
      <div className='footer'>
        <p className='leftText'>© 2020 Developed by me.</p>
        <table>
          <thead>
            <tr>
              <th>Call</th>
              <th>Write</th>
              <th>Follow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+37477400046</td>          
              <td>varserzakaryan@gmail.com</td>          
              <td><Socials className='socialFooter' /></td>
            </tr>
          </tbody>   
        </table>
        
      </div>
  )

}

export default Footer;