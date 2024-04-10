import Cookies from 'js-cookie';

const accessTokenKey = 'crow_access_token';
const refeshTokenKey = 'crow_refresh_token';
const objCookie = {
    expires: 30,
    domain: process.env.COOKIE_DOMAIN,
}

export const saveToken = (acess_token, refresh_token) => {
    if (acess_token && refresh_token) {
        Cookies.set(accessTokenKey, acess_token, {
            ...objCookie
        })
        Cookies.set(refeshTokenKey, refresh_token, {
            ...objCookie
        })
    }
    else {
        Cookies.remove(accessTokenKey, {
            ...objCookie,
            path: '/',
            domain: process.env.COOKIE_DOMAIN
        })
        Cookies.remove(refeshTokenKey, {
            ...objCookie,
            path: '/',
            domain: process.env.COOKIE_DOMAIN
        })
    }
}

export const getToken = () => {
    const access_token = Cookies.get(accessTokenKey)
    const refesh_token = Cookies.get(refeshTokenKey)
    return {
        access_token,
        refesh_token,
    }
}

export const logOut = () => {
    const access_token = Cookies.get(accessTokenKey)
    if (access_token) {
        Cookies.remove(accessTokenKey, {
            ...objCookie,
            path: '/',
            domain: process.env.COOKIE_DOMAIN
        })
        Cookies.remove(refeshTokenKey, {
            ...objCookie,
            path: '/',
            domain: process.env.COOKIE_DOMAIN
        })
    }
}