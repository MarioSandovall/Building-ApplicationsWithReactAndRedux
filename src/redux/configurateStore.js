import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add support for Redux dev tools

export default function configureStore(initiaState) {
  return createStore(
    rootReducer,
    initiaState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
