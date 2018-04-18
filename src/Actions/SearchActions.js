import { FETCH_POSTS } from './Types';

export const fetchPosts = () => dispatch => {
    //console.log("FETCH POSTS search actions")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

