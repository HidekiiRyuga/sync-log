import { combineReducers } from 'redux';
import logs from './logs'; // Ensure this matches your filename logs.js

export default combineReducers({ 
    logs: logs 
});