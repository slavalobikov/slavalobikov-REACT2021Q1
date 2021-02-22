const ADD_MOVE = 'ADD_MOVE/StatisticTwoReducer';
const ADD_COUNT_YOU = 'ADD_COUNT_YOU/StatisticTwoReducer';
const ADD_COUNT_COMPUTER = 'ADD_COUNT_COMPUTER/StatisticTwoReducer';
const ADD_MOVE_IN_HISTORY = 'ADD_MOVE_IN_HISTORY/StatisticTwoReducer';
const ZERO_COUNT_ALL = 'ZERO_COUNT_ALL/StatisticTwoReducer'

let initialState = {
    move: 0,
    youCountTwo: 0,
    computerCountTwo: 0,
    youChooseTwo: 0,
    computerOneChoose: 0,
    computerTwoChoose: 0,
    status: '',
    stata: [],


}

const StatisticTwoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVE: {
            return {
                ...state,
                move: Number(state.move) + 1
            }
        }
        case ADD_COUNT_YOU: {
            return {
                ...state,
                youCountTwo: [Number(state.youCountTwo) + 1]
            }
        }
        case ADD_COUNT_COMPUTER: {
            return {
                ...state,
                computerCountTwo: [Number(state.computerCountTwo) + 1]
            }
        }
        case ADD_MOVE_IN_HISTORY: {
            let thisMove = {
                move: state.move,
                youChoose: action.youChooce,
                computerOneChoose: action.computerOneChoose,
                computerTwoChoose: action.computerTwoChoose,
                status: action.status
            }
            return {
                ...state,
                stata:[...state.stata, thisMove]

            }
        }
        case ZERO_COUNT_ALL: {
            return {
                ...state,
                youCountTwo: 0,
                move:0,
                computerOneChoose:0,
                computerTwoChoose:0,
                computerCountTwo:0,
                stata: []
            }
        }
        default:
            return state
    }
}

export const addMoveTwoReducer = () => ({type: ADD_MOVE});
export const addCountYouTwo = () => ({type: ADD_COUNT_YOU});
export const addCountComputertTwo = () => ({type: ADD_COUNT_COMPUTER});

export const addHistoryTwo = (youChooce, computerOneChoose, computerTwoChoose, status) =>
    ({type: ADD_MOVE_IN_HISTORY, youChooce, computerOneChoose, computerTwoChoose, status})
export const setZeroTwoHistory = () => ({type:ZERO_COUNT_ALL})

export default StatisticTwoReducer;