import React, { useState } from 'react';
import banner from '../../../images/banner.jpg';
import DateItem from '../../library/DateItem';
import Popup from '../../library/Popup';



const MainPage = () => {
  const dates = new Date();

  console.log(dates)

  const [month, setMonth] = useState(dates.getMonth());
  const [year, setYear] = useState(dates.getFullYear());

  const useMonth = (data) => (e) => {
    let actMonth = data;
    if (data >= 12) {
      actMonth = 11
    } else if (data <= 0) {
      actMonth = 0;
    } else {
      actMonth = data;
    }
    setMonth(actMonth);
    console.log(actMonth)
  }

  const calendarBody = document.querySelector('.calendar .calendar-body');
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthesNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const genCalendar = (date, month) => {
    let curDay = date.getDate();
    date.setDate(1);
    date.setMonth(month);

    console.log(date.getMonth(), date.getFullYear())
    let startDay = date.getDay();
    let daysTotal = !(date.getFullYear() % 4) && date.getMonth() === 1 ? 29 : dayInMonth[date.getMonth()];
    let content = [];
    // console.log(startDay)
    for (let i = 0; i < startDay; i++) {
      content = [...content, <DateItem key={i - 7 + date.getFullYear() + month} date={(dayInMonth > 0 ? dayInMonth[month - 1] - (startDay - i - 1) : dayInMonth[12 - 1] - (startDay - i - 1))} previousMonth={true} />];
    }
    for (let i = 1; i <= daysTotal; i++) {
      if (i === curDay && month === new Date().getMonth()) {
        content = [...content, <DateItem key={i + date.getFullYear() + month} date={i} year={date.getFullYear()} month={month < 12 ? monthesNames[month] : monthesNames[month - 12]} day={startDay + (i - 1)} active={true} />];
      } else {
        content = [...content, <DateItem key={i + date.getFullYear() + month} date={i} year={date.getFullYear()} month={month < 12 ? monthesNames[month] : monthesNames[month - 12]} day={startDay + (i - 1)} />];
      }
    }
    return content
  }

  return (
    <>

      <main className="content d-grid" >
        <div className="content-banner">
          <img src={banner} alt="banner" />
          <h1 className="banner-title" >Choose the day for the meeting</h1>
          <div className="banner-descr" >We encourage you to book your appointment online. <br /> This will save you time.</div>
        </div>

        <div className="content-calendar d-grid">

          <div className="calendar" >

            <div className="calendar-header">
              <div className="prev" onClick={useMonth(month - 1)}>

              </div>

              <div className="month-name">
                {month < 12 ? monthesNames[month] + ' ' + year : monthesNames[month - 12] + ' ' + year}
              </div>

              <div className="next" onClick={useMonth(month + 1)} >

              </div>
            </div>

            <div className="calendar-body">
              <div className="calendar-row d-grid" >
                {genCalendar(new Date(), month)}
              </div>

            </div>

            <div className="calendar-footer">
              <div className="calendar-row d-grid" >
                <div className="calendar-col" >
                  S
              </div>
                <div className="calendar-col" >
                  M
              </div>
                <div className="calendar-col" >
                  T
              </div>
                <div className="calendar-col" >
                  W
              </div>
                <div className="calendar-col" >
                  T
              </div>
                <div className="calendar-col" >
                  F
              </div>
                <div className="calendar-col" >
                  S
              </div>
              </div>
            </div>
          </div>

        </div>
      </main>


      <Popup />

    </>
  )
}

export default MainPage;