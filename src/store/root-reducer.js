// Modules
import { combineReducers } from "redux";

// Reducers
import { uiReducer } from "./ui/ui.reducer";

// Combined Reducers
export default combineReducers({ ui: uiReducer });
