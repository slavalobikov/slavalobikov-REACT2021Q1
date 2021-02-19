const ADD_COUNT_YOU = 'ADD_COUNT_YOU/StatisticReducer';
const ADD_COUNT_COMPUTER = 'ADD_COUNT_COMPUTER/StatisticReducer';
const ADD_MOVE_IN_HISTORY = 'ADD_MOVE_IN_HISTORY/StatisticReducer';
const ZERO_COUNT_ALL = 'ZERO_COUNT_ALL/StatisticReducer';
const ADD_YOU_CHOOCE = 'ADD_YOU_CHOOCE/StatisticReducer';
const ADD_COMPUTER_CHOOSE = 'ADD_COMPUTER_CHOOSE/StstisticReducer';
const ADD_MOVE = 'ADD_MOVE/StatisticReducer'

let initialState = {
    name: 'New Player',
    countYou: 0,
    countComputer: 0,
    statistics: [],
    move: 0,
    youChooce: 0,
    computerChoose: 0,


}

const StatisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT_YOU: {
            return {
                ...state,
                countYou: [Number(state.countYou) + 1]
            }
        }
        case ADD_COUNT_COMPUTER: {
            return {
                ...state,
                countComputer: [Number(state.countComputer) + 1]
            }
        }
        case ADD_YOU_CHOOCE: {
            return {
                ...state,
                youChooce: action.choose
            }
        }
        case ADD_COMPUTER_CHOOSE: {
            return {
                ...state,
                computerChoose:action.choose
            }
        }
        case ADD_MOVE_IN_HISTORY: {
            let thisMove = {
                move:state.move,
                youChooce: state.youChooce,
                computerChoose: state.computerChoose,

            }
            return {
                ...state,
                statistics: [...state.statistics, thisMove]

            }
        }
        case ZERO_COUNT_ALL: {
            return {
                ...state,
                countYou: 0,
                move:0,
                countComputer:0,
                statistics: []
            }
        }
        case ADD_MOVE: {
            return {
                ...state,
                move:[Number(state.move) + 1]
            }
        }

        default: return state
    }
}

export const AddCountYou = () => ({type: ADD_COUNT_YOU});
export const AddCountComputer = () => ({type: ADD_COUNT_COMPUTER});
export const deleteAllStats = () => ({type: ZERO_COUNT_ALL});
export const addYouChoose = (choose) => ({type:ADD_YOU_CHOOCE, choose});
export const addComputerChoose = (choose) => ({type:ADD_COMPUTER_CHOOSE, choose})
export const addMoveHistory = () => ({type: ADD_MOVE_IN_HISTORY})
export const addMove = () => ({type: ADD_MOVE})

export default StatisticsReducer;