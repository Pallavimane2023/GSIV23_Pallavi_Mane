import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combineReducers from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk)));

const persistor = persistStore(store);

export { store, persistor };