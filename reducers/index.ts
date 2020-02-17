import {createStore, combineReducers} from 'redux';
import playerReducer from '../reducers/player';

const rootReducer = combineReducers({player: playerReducer});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch;
