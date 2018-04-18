import { FETCH_USERS, VALIDATE_LOGIN } from '../Actions/Types'

const initialState = {
    users:[], 
    loggedIn: false, 
    invalidAttempt: false, 
    username: '', 
    city: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            //console.log("FETCH UERS IN THE reducer", action.payload);
            return {
                ...state,
                users: action.payload
            }

        case VALIDATE_LOGIN: 
            //console.log("VALIDATE LOGIN IN REDUCER. DID IT LOGIN??", action.payload.loggedIn)
            //console.log("INVALID ATTEMPT???", action.payload.invalid)
            return {
                ...state,
                loggedIn: action.payload.loggedIn, 
                invalidAttempt: action.payload.invalid, 
                username: action.payload.uname, 
                city: action.payload.pass
            }

        default:
            return state;
    }
}