// Modules
import { combineReducers } from "redux";

// Reducers
import { uiReducer } from "./ui/ui.reducer";
import { authReducer } from "./auth/auth.reducer";
import { documentReducer } from "./document/document.reducer";

// Combined Reducers
export default combineReducers({
  ui: uiReducer,
  auth: authReducer,
  document: documentReducer,
});
