// Modules
import { combineReducers } from "redux";

// Reducers
import { uiReducer } from "./ui/ui.reducer";
import { authReducer } from "./auth/auth.reducer";

// Combined Reducers
export default combineReducers({ ui: uiReducer, auth: authReducer });
