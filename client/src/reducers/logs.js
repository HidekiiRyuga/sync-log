import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const logsReducer = (logs = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
    case UPDATE:
      return logs.map((log) => (log._id === action.payload._id ? action.payload : log));
    case CREATE:
      return [...logs, action.payload];
    case DELETE:
      return logs.filter((log) => log._id !== action.payload);
    default:
      return logs;
  }
};

export default logsReducer;