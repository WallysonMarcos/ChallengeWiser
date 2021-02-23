export enum LoginTypes {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCES = "LOGIN_SUCCES",
    LOGIN_FAILURE = "LOGIN_FAILURE",
}

export interface LoginState {
    data: LoginData,
    loading: boolean,
    error: boolean
}

export interface LoginData {
    id: number,
    name: string,
    token: string
}