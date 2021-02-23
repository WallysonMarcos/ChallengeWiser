import { all, takeLatest} from 'redux-saga/effects';
import { LoginTypes  } from './login/types';

import { login } from './login/sagas';

export default function* rootSaga(){
    return yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, login)
    ]);
}