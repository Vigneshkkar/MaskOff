import createSagaMiddleware from 'redux-saga';

import { applyMiddleware, compose, createStore  } from "redux";

import rootReducer from '../reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga);

export default store;