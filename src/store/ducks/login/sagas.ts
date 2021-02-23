import { call, put } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';

import {loginApi} from '../../../services/login';

export function* login(action){
    try{
        const response = yield call(loginApi,action.params);
        yield put(loginSuccess(response.data))
    }catch(err){
        yield put(loginFailure());
    }
}