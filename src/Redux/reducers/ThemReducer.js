const SET_THEME = 'SET_THEME/ThemReducer';
const SET_LANG = 'SET_LANG/ThemReducer'

let initialState = {
    theme: 'light',
    lang: 'ru',
}

const ThemReducer = (state = initialState,action) => {
    switch (action.type) {

        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        case SET_LANG: {
            return {
                ...state,
                lang: action.lang
            }
        }


        default: return state
    }
}

export const setTheme = (theme) => ({type:SET_THEME, theme})
export const setLang = (lang) => ({type:SET_LANG, lang})

export default ThemReducer;