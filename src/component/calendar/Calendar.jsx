import React from 'react';
import './Calendar.css';






const dater = new Date()
let mm = dater.getMonth()
let yyyy = dater.getFullYear() 
let dayer = dater.getDay();
let dd = dater.getDate();
let day2 = '';
let day3 = '';
let day4 = '';
let day5 = '';
let day6 = '';
let day7 = '';

switch(dayer) {
    case 1:
        dayer = 'Mon'
        day2 = 'Sun'
        day3 = 'Tue'
        day4 = 'Wed'
        day5 = 'Thur'
        day6 = 'Fri'
        day7 = 'Sat'
        break;
    case 2:
        dayer = 'Tue'
        day2 = 'Mon'
        day3 = 'Wed'
        day4 = 'Thur'
        day5 = 'Fri'
        day6 = 'Sat'
        day7 = 'Sun'
        break;
    case 3:
        dayer = 'Wed'
        day2 = 'Tue'
        day3 = 'Thur'
        day4 = 'Fri'
        day5 = 'Sat'
        day6 = 'Sun'
        day7 = 'Mon'
        break;
    case 4:
        dayer = 'Thur'
        day2 = 'Wed'
        day3 = 'Fri'
        day4 = 'Sat'
        day5 = 'Sun'
        day6 = 'Mon'
        day7 = 'Tue'
        break;
    case 5:
        dayer = 'Fri'
        day2 = "Thur"
        day3 = 'Sat'
        day4 = 'Sun'
        day5 = 'Mon'
        day6 = 'Tue'
        day7 = 'Wed'
        break;
    case 6:
        dayer = 'Sat'
        day2 = 'Fri'
        day3 = 'Sun'
        day4 = 'Mon'
        day5 = 'Tue'
        day6 = 'Wed'
        day7 = 'Thur'
        break;

    case 0:
        dayer = 'Sun'
        day2 = 'Sat'
        day3 = 'Mon'
        day4 = 'Tue'
        day5 = 'Wed'
        day6 = 'Thur'
        day7 = 'Fri'
        break;
    default:
        break;
};
switch (mm) {
    case 0:
        mm = 'january'
        break;
    case 1:
        mm = 'Febuary'
        break;
    case 2:
        mm = 'March'
        break;
    case 3:
        mm = 'April'
        break;
    case 4:
        mm = 'May'
        break;
    case 5:
        mm = 'June'
        break;
    case 6:
        mm = 'July'
        break;
    case 7:
        mm = 'August'
        break;
    case 8:
        mm = 'September'
        break;
    case 9:
        mm = 'October'
        break;
    case 10:
        mm = 'November'
        break;
    case 11:
        mm = 'December'
        break;

    
    default:
        break;
}



const Calendar = () => {

  return (
    <div className="wrapper">
        <h3>{ mm +'-' + yyyy} </h3>
    <div className='calendar-wrapper'>

        
      <div className='tab'>
        <h5>{day2}</h5>
        <h6>{dd - 1}</h6>
      </div>
      <div className='act'>
        <h5> {dayer} </h5>
        <h6>{dd}</h6>
      </div>

      <div className="tab one">
        <h5>{day3}</h5>
        <h6>{dd + 2}</h6>
      </div>
      <div className="tab one">
        <h5>{day4}</h5>
        <h6>{dd + 3 }</h6>
      </div>
      <div className='tab'>
        <h5>{day5}</h5>
        <h6>{dd + 4 }</h6>
      </div>
      <div className="tab one">
        <h5>{day6}</h5>
        <h6>{dd +5 }</h6>
      </div>
      <div className="tab one">
        <h5>{day7}</h5>
        <h6>{dd + 6 }</h6>
      </div>
    </div>
    </div>
  )
}

export default Calendar
