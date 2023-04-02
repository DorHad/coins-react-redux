import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { coinReducer } from "./coinsState";


//VI in theory //27. combine reducers 
const reducers = combineReducers({coinState:coinReducer});
export const store = configureStore({reducer:reducers});