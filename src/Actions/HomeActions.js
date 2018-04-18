import { FETCH_STUFF } from './Types';

//called when component mounts in main Component (Home.js)
export const fetchStuff = () => dispatch => {
    //console.log("Fetch stuff in ACTIONS"); 
    //logic for fetching errything in the URL
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(stuff => dispatch({
            type: FETCH_STUFF,
            payload: stuff
        }))
}