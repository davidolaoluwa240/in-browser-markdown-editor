// Modules
import { createStore, applyMiddleware, compose } from "redux";

// Middlewares Imports
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

// Root Reducer
import rootReducer from "./root-reducer";

// Root Saga
import { rootSaga } from "./root-saga";

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

// Create Composed Enhancer
const composedEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Register Middlewares
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

// Create Redux Store
const store = createStore(rootReducer, undefined, composedEnhancers);

// Run Root Saga
sagaMiddleware.run(rootSaga);

export default store;
