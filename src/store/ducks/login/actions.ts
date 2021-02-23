import { action } from 'typesafe-actions';
import {LoginData, LoginTypes} from './types';

export const loginSuccess = (data: LoginData) => action(LoginTypes.LOGIN_SUCCES, { data });
export const loginFailure = () => action(LoginTypes.LOGIN_FAILURE);