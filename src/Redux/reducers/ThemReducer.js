const SET_THEME = 'SET_THEME/ThemReducer';

let initialState = {
    theme: 'dark',
}

const ThemReducer = (state = initialState,action) => {
    switch (action.type) {

        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }

        default: return state
    }
}

export const setTheme = (theme) => ({type:SET_THEME, theme})

export default ThemReducer;