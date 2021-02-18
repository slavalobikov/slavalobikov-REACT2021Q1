import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ThemReducer from "./reducers/ThemReducer";
import MusicReducer from "./reducers/MusicReducer";
import StatisticsReducer from "./reducers/StatisticReducer";
import CountNumberReducer from "./reducers/CountNumberReducer";


let reducers = combineReducers({
    ThemReducer,
    MusicReducer,
    StatisticsReducer,
    CountNumberReducer,
});

const persistConfig = {
    key: 'ReactEPAMSlavalobikov',
    storage: storage,
    whitelist: ['ThemReducer', 'MusicReducer', 'StatisticsReducer'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducers);


/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };