import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookies from 'js-cookie'


export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const signout = (next) => {
    removeCookies('token')
    removeLocalStorage('user')
    next()

    return fetch(`${API}/signout`, {
        method: 'GET'
    }).then((response) => {
        console.log('signout seccess')


    }).catch((err) => {
        console.log(err)

    })



}



/// set cookies
export const setCookies = (key, value) => {
    if (process.browser) {
        cookies.set(key, value, {
            expires: 1
        })
    }

}



////remove cookies

export const removeCookies = (key) => {
    if (process.browser) {
        cookies.remove(key, {
            expires: 1
        })
    }

}


////get cookies

export const getCookie = (key) => {
    if (process.browser) {
        return cookies.get(key)
    }

}




/// set localStorage

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }

}


///remove localStorage

export const removeLocalStorage = (key) => {
    if (process.browser) {
        localStorage.removeItem(key)
    }

}

///authenticate user by pass data to cookies and localstorage

export const authenticate = (data, next) => {
    setCookies('token', data.token)
    setLocalStorage('user', data.user)
    next()


}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false;
            }
        }

    }



}