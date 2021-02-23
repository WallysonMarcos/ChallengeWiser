import { Reducer } from 'redux';
import { LoginState, LoginTypes, LoginData } from './types';

const INITIAL_STATE = {
    data: {} as LoginData,
    error: false,
    loading: false
}

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_REQUEST:
            return { ...state, loading: true };
        case LoginTypes.LOGIN_SUCCES:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            };
        case LoginTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: false,
                data: {}
            };
        default:
            return state;
    }
};

export default reducer;