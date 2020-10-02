import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updDate } from '../../../actions';
import Popup from '../Popup';

const DateItem = ({ day, date, month, year, active, updDate }) => {

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayOpt;
    if (day > 6) {
        if (day > 13) {
            if (day > 20) {
                if (day > 27) {
                    dayOpt = day - 28;
                } else {
                    dayOpt = day - 21;
                }
            } else {
                dayOpt = day - 14;
            }
        } else {
            dayOpt = day - 7;
        }
    } else {
        dayOpt = day
    }


    const showDate = () => {
        updDate(weekDays[dayOpt], date, month, year);
    }

    return (
            <div className={active ? 'calendar-col active' : 'calendar-col'} onClick={showDate} > { date} </div>
     
    )
}



const mapDispatchToProps = (dispatch) => ({
    updDate: (curDay, curDate, curMonth, curYear) => {
        dispatch(updDate(curDay, curDate, curMonth, curYear));
    }
})

export default connect(null, mapDispatchToProps)(DateItem)