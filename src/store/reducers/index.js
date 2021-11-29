import { combineReducers } from "redux";
import { messages } from "./messages";
const rootReducer = (history) => {
  return combineReducers({
    router: history,
    messages,
  });
};
export default rootReducer;
