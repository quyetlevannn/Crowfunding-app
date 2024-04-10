const { default: axios } = require('api/axios')

export const requestAythRegister = (data) => {
    return axios.post('/auth/register', {
        ...data
    })
}

export const requestAuthLogin = (data) => {
    return axios.post('/auth/login', {
        ...data,
    });
};