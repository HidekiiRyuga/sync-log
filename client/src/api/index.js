import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const url = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/logs' 
  : '/logs';

export const fetchLogs = () => axios.get(url);
export const createLog = (newLog) => axios.post(url, newLog); 
export const likeLog = (id) => axios.patch(`${url}/${id}/likeLog`);
export const updateLog = (id, updatedLog) => axios.patch(`${url}/${id}`, updatedLog);
export const deleteLog = (id) => axios.delete(`${url}/${id}`);