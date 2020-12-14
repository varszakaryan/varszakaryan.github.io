import React from "react";
import './Events.css';
import logo17 from '../logo17.png';
import logo18 from '../logo18.jpg';
import logo19 from '../logo19.png';
import react19 from '../react19.png';

const Events = () => {
  return (
      <div className='events'>
        <div className='eventCard'>
          <img src={logo19} className="eventLogo" alt="Varser's event" />
          <h1>JS Conf Armenia 2019</h1>
          <div className='placeholderBlue'></div>
          <p className='textStyle'>PROJECT MANAGER</p>
          <a href='https://www.jsconf.am/' target='onBlank'>
            <button>Learn More</button>
          </a>
        </div>

        <div className='eventCard'>
          <img src={react19} className="ownerImg" alt="Varser's event" />
          <h1>React Conf Armenia 2019</h1>
          <div className='placeholderBlue'></div>
          <p className='textStyle'>PROJECT MANAGER</p>
          <a href='https://www.reactconf.am/' target='onBlank'>
            <button>Learn More</button>
          </a>
        </div>

        <div className='eventCard'>
          <img src={logo18} className="ownerImg" alt="Varser's event" />
          <h1>JS Conf Armenia 2018</h1>
          <div className='placeholderBlue'></div>
          <p className='textStyle'>PROJECT MANAGER</p>
          <a href='https://2018.jsconf.am/' target='onBlank'>
            <button>Learn More</button>
          </a>
        </div>


        <div className='eventCard'>
          <img src={logo17} className="ownerImg" alt="Varser's event" />
          <h1>JS Conf Armenia 2017</h1>
          <div className='placeholderBlue'></div>
          <p className='textStyle'>PROJECT MANAGER</p>
          <a href='https://2017.jsconf.am/' target='onBlank'>
            <button>Learn More</button>
          </a>
        </div>
      </div>
  )

}

export default Events;