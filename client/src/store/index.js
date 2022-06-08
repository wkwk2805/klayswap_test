import { combineReducers, createStore } from "redux";
import token from "./token";

const store = createStore(combineReducers({ token }));

export default store;
