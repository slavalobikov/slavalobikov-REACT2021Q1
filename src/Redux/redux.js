import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ThemReducer from "./reducers/ThemReducer";
import MusicReducer from "./reducers/MusicReducer";
import StatisticsReducer from "./reducers/StatisticReducer";
import CountNumberReducer from "./reducers/CountNumberReducer";
import OneTwoReducer from "./reducers/OneTwoReducer";
import StatisticTwoReducer from "./reducers/StatisticTwoReducer";


let reducers = combineReducers({
    ThemReducer,
    MusicReducer,
    StatisticsReducer,
    CountNumberReducer,
    OneTwoReducer,
    StatisticTwoReducer,
});

const persistConfig = {
    key: 'ReactEPAMSlavalobikov',
    storage: storage,
    whitelist: ['ThemReducer',
        'OneTwoReducer',
        'MusicReducer',
        'StatisticsReducer',
        'StatisticTwoReducer'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducers);



const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };