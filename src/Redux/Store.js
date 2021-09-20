import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducerFunctions/counterReducer";
import createSagaMiddleware from "redux-saga";
import mysaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mysaga);

export default store;
