import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CLOSE_POPUP } from '../../../actions';

const Popup = ({ curDay, curDate, curMonth, curYear, popupActive, closePopup }) => {
    return(
        <div className={ popupActive ? 'overlay active' : 'overlay' } >
            <div className={'popup'}>
                <div className='close-popup' onClick={ closePopup }></div>
                <label>
                    Month
                    <input type="text" value={curMonth} onFocus={(e) => {e.preventDefault()}}  onChange={e => { e.preventDefault() }} />
                </label>
                <label>
                    Day
                    <input type="text" value={curDay + ' ' + curDate }  onChange={e => { e.preventDefault() }} />
                </label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    curDay: state.curDay,
    curDate: state.curDate,
    curMonth: state.curMonth,
    curYear: state.curYear,
    popupActive: state.popupActive
})

const mapDispatchToProps = (dispatch) => ({
    closePopup: () => {
        dispatch({type: CLOSE_POPUP});
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup)