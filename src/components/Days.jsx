import React from 'react';
import SingleDay from './SingleDay.jsx';
const Days = () => {
  return (
    <div id='daysDisplay'>
      <button id='addDayBtn'>Plan Your Day</button>
      <div className='days'>
        <img src="http://localhost:3000/pics/cover.jpg" alt='' />
        <SingleDay />
      </div>
    </div>
  );
};

export default Days;
