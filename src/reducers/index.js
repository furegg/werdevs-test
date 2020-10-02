import {
    GET_DATE, CLOSE_POPUP
} from '../actions';


const initailState = {

    curMonth: 0,
    curYear: 0,
    curDate: 0,
    curDay: 'Monday'

}

const reducers = ( state = initailState, action ) => {
    switch( action.type ){

        case GET_DATE:
            return({
                ...state,
                curMonth: action.payload.curMonth,
                curYear: action.payload.curYear,
                curDate: action.payload.curDate,
                curDay: action.payload.curDay,
                popupActive: action.payload.popupActive
            });

        case CLOSE_POPUP:
            return({
                popupActive: false
            })

        default:
            return state;

    }
}

export default reducers;