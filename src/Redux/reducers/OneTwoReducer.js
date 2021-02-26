const SET_IS_ONE = 'SET_IS_ONE/isOneReducer';

let initialState = {
    isOne: true,
}

const OneTwoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_ONE: {
            return {
                ...state,
                isOne: action.bool
            }
        }

        default: return state
    }
}

export const setIsOne = (bool) => ({type:SET_IS_ONE, bool})

export default OneTwoReducer;