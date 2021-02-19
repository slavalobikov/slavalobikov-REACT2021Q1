const SET_IS_VOLUEM = 'SET_IS_VOLUEM/MucicReducer';
const SET_VOLUEM_SIGNAL = 'SET_VOLUEM_SIGNAL/MusicReducer';

let initialState = {
    voluem: 0.5,
    voluemSignal: 0.5,
}

const MusicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_VOLUEM: {
            return {
                ...state,
                voluem:action.voluem
            }
        }
        case SET_VOLUEM_SIGNAL: {
            return {
                ...state,
                voluemSignal: action.voluem
            }
        }
        default: return state
    }
}

export const setVoluem = (voluem) => ({type:SET_IS_VOLUEM, voluem})
export const setVoluemSignal = (voluem) => ({type: SET_VOLUEM_SIGNAL, voluem})

export default MusicReducer;