import { combineReducers } from "redux";

import { timerReducer } from "./reducers";

export default combineReducers({
    timer: timerReducer
});
