//import config from 'config';
//import { authHeader } from '../helpers/auth.header';

export const userService = {
    login
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:8000/api/v1/session/', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        //if (!response.ok) {
        //    if (response.status === 401) {
                // auto logout if 401 response returned from api
        //        logout();
        //        location.reload(true);
        //    }

            //const error = (data && data.message) || response.statusText;
            //return Promise.reject(error);
        //}

        return data;
    });
}
