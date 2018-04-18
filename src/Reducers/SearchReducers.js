import { FETCH_POSTS } from '../Actions/Types'

const initialState = {
    posts: [],
}

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_POSTS:
            //console.log("FETCH POSTS IN THE reducer", action.payload);
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state;
    }
}