import api from './api';

export const loginApi = (params) => {
    return api.post('/login', params);
}
