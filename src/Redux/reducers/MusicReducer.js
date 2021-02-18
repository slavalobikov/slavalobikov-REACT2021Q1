const SET_IS_VOLUEM = 'SET_IS_VOLUEM/MucicReducer'

let initialState = {
    voluem: 0.5,
}

const MusicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_VOLUEM: {
            return {
                ...state,
                voluem:action.voluem
            }
        }
        default: return state
    }
}

export const setVoluem = (voluem) => ({type:SET_IS_VOLUEM, voluem})

export default MusicReducer;