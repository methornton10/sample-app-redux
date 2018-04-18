import { FETCH_USERS, VALIDATE_LOGIN } from './Types';

export const fetchUsers = () => dispatch => {
    //console.log("FETCH USERS login actions")
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data
        }))
}

export const validateLogin = (username, password, users) => dispatch => {
    let loginX = false;
    let invalidAttempt = true;
    let uname = '';
    let city = '';
    users.map(u => {
        if (u.username === username && u.address.city === password) {
            loginX = true;
            invalidAttempt = false;
            uname = username;
            city = password;
        }
    })
    dispatch({
        type: VALIDATE_LOGIN,
        payload: {
            loggedIn: loginX,
            invalid: invalidAttempt,
            uname: uname,
            pass: city
        }
    })
}