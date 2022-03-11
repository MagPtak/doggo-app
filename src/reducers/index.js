import likeCounterReducer from "./likeCounter";
import dislikeCounterReducer from "./dislikeCounter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  likeCounter: likeCounterReducer,
  dislikeCounter: dislikeCounterReducer,
});

export default allReducers;
