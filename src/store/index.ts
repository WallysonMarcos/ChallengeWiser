import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';

import { LoginState } from './ducks/login/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


export interface ApplicationState {
    login: LoginState
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;