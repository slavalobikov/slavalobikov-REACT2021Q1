const SET_MY_NUMBER = 'SET_MY_NUMBER/StatisticReducer';
const SET_COMPUTER_NUMBER = 'SET_COMPUTER_NUMBER/StatisticReducer';
const ZERO_NUMBER = 'ZERO_NUMBER/StatisticReducer';
const SET_STATUS_WIN ='SET_STATUS_WIN/StatistcReducer';

let initialState = {

    myNumber: 0,
    computerNumber: 0,
    statusWin: null,
}

const CountNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MY_NUMBER: {
            return {
                ...state,
                myNumber: action.number
            }
        }
        case SET_COMPUTER_NUMBER: {
            return {
                ...state,
                computerNumber: action.number

            }
        }
        case ZERO_NUMBER: {
            return {
                ...state,
                computerNumber:0,
                myNumber:0,
            }
        }
        case SET_STATUS_WIN: {
            return {
                ...state,
                statusWin:action.status
            }
        }
        default: return state
    }
}

export const setMyNumber = (number) => ({type:SET_MY_NUMBER, number});
export const setComputerNumber = (number) => ({type:SET_COMPUTER_NUMBER, number});
export const setZeroNumber = () => ({type:ZERO_NUMBER});
export const setStatusWin = (status) => ({type:SET_STATUS_WIN, status});

export default CountNumberReducer;