// Modules
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Middlewares Imports
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { autoSyncDocumentsToCloud } from "./middlewares/auto-sync-documents.middlewares";

// Root Reducer
import rootReducer from "./root-reducer";

// Root Saga
import { rootSaga } from "./root-saga";

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["document", "ui"],
};

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
  autoSyncDocumentsToCloud,
].filter(Boolean);

// Create Composed Enhancer
const composedEnhancer =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Register Middlewares
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

// Create Persistor Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux Store
const store = createStore(persistedReducer, undefined, composedEnhancers);

// Create Persist Store
export const persistor = persistStore(store);

// Run Root Saga
sagaMiddleware.run(rootSaga);

export default store;
