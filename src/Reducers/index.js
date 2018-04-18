import { combineReducers } from 'redux';
import HomeReducer from './HomeReducers';
import LoginReducer from './LoginReducers'; 
import SearchReducer from './SearchReducers'

export default combineReducers({
    items: HomeReducer, 
    users: LoginReducer, 
    posts: SearchReducer, 
})