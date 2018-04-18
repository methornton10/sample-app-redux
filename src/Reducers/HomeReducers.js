import { FETCH_STUFF } from '../Actions/Types'

const initialState = {
    items: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        //This gets called from the action
        //Populate items object in the state with the payload (json objects)
        case FETCH_STUFF:
            //console.log("FETCH STUFF IN REDUCER");
            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}