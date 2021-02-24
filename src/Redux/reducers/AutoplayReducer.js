const EDIT_IS_AUTOPLAY = 'EDIT_IS_AUTOPLAY/AutoplayReducer';
const EDIT_YOU_NUMBER = 'EDIT_YOU_NUMBER/AutoplayReducer';
const EDIT_COMPUTER_NUMBER = 'EDIT_COMPUTER_NUMBER/AutoplayReducer';
const SET_ZERO_INFO = 'SET_ZERO_INFO/AutoplayReducer';
const ADD_MOVE = 'ADD_MOVE/AutoplayReducer';
const ADD_YOU_POINTS = 'ADD_YOU_POINTS/AutoplayReducer';
const ADD_ENEMY_COMPUTER_POINT = 'ADD_ENEMY_COMPUTER_POINT/AutoplayReducer';
const ZERO_COUNT_ALL = 'ZERO_COUNT_ALL/AutoplayReducer';
const ADD_MOVE_IN_HISTORY = 'ADD_MOVE_IN_HISTORY/AutoplayReducer';
const SET_STATUS = 'SET_STATUS/AutoplayReducer'


const initialState = {
    move:0,
    isAutoplay: false,
    youNumber:0,
    computerNumber: 0,
    youComputerPoint:0,
    enemyComputerPoint:0,
    status:'',
    stataAutoplay:[],

}

const AutoplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_IS_AUTOPLAY: {
            return {
                ...state,
                isAutoplay: action.boolean
            }
        }
        case EDIT_YOU_NUMBER: {
            let number;
            const rand = Math.random()
            if (rand < 0.33) {
                number = 1
            } else if (rand < 0.66) {
                number = 2
            } else {
                number = 3
            }
            return {
                ...state,
                youNumber:number

            }
        }
        case EDIT_COMPUTER_NUMBER: {
            return {
                ...state,
                computerNumber: action.number
            }
        }
        case SET_ZERO_INFO: {
            return {
                ...state,
                youNumber:0,
                computerNumber:0
            }
        }
        case ADD_MOVE: {
            return {
                ...state,
                move: Number(state.move) + 1
            }
        }
        case ADD_YOU_POINTS: {
            return {
                ...state,
                youComputerPoint: Number(state.youComputerPoint) + 1
            }
        }
        case ADD_ENEMY_COMPUTER_POINT: {
            return {
                ...state,
                enemyComputerPoint: Number(state.enemyComputerPoint) + 1
            }
        }
        case ZERO_COUNT_ALL: {
            return {
                ...state,
                move:0,
                youComputerPoint:0,
                enemyComputerPoint:0,
                stataAutoplay:[]
            }
        }
        case ADD_MOVE_IN_HISTORY: {
            let thisMove = {
                move: state.move,
                youChoose: action.youChooce,
                computerOneChoose: action.computerOneChoose,
                status: action.status
            }
            return {
                ...state,
                stataAutoplay:[...state.stataAutoplay, thisMove]

            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status:action.status
            }
        }
        default: return state
    }
}

export const editIsAutoPlay = (boolean) => ({type:EDIT_IS_AUTOPLAY, boolean})
export const editYouNumber = () => ({type:EDIT_YOU_NUMBER})
export const editComputerNumber = (number) => ({type:EDIT_COMPUTER_NUMBER, number})
export const setZeroInfo = () => ({type:SET_ZERO_INFO});
export const addMove = () => ({type:ADD_MOVE})
export const addYouComputerPoint = () => ({type: ADD_YOU_POINTS})
export const addEnemyComputerPoint = () => ({type: ADD_ENEMY_COMPUTER_POINT})
export const deleteAutoplayStata = () => ({type:ZERO_COUNT_ALL})
export const addMoveInHistoryAutoplay = (youChooce, computerOneChoose, status) =>
    ({type: ADD_MOVE_IN_HISTORY, youChooce, computerOneChoose, status})
export default AutoplayReducer;