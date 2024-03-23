import changeTheNumber from "./Counter";
import changeTheTheme from "./Theme";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheTheme,
})
export default rootReducer;