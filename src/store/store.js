// Modules
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

// Root Reducer
import rootReducer from "./root-reducer";

// Middlewares
const middlewares = [process.env.NODE_ENV === "development" && logger];

const composedEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export default createStore(rootReducer, undefined, composedEnhancers);
