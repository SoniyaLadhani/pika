import { combineReducers } from "redux";

import {authReducer} from "./authReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
    authReducer,
    photosReducer
  });