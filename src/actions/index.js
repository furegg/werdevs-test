export const GET_DATE = 'GET_DATE';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const updDate = ( curDay, curDate, curMonth, curYear ) => ( dispatch ) => {
    console.log(1)
    dispatch({ 
        type: GET_DATE, 
        payload: {
            curDay: curDay, 
            curDate: curDate, 
            curMonth: curMonth, 
            curYear: curYear,
            popupActive: true
        }
    });
}

