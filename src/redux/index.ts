import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

import { rootReducer } from './reducers';


export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>
export type AppDispatch = typeof Store.dispatch;