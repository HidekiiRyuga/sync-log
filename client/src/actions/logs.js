import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

import * as api from '../api/index.js';

export const getLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLogs();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.entry);
  }
};

export const createLog = (log) => async (dispatch) => {
  try {
    const { data } = await api.createLog(log);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.entry);
  }
};

export const updateLog = (id, log) => async (dispatch) => {
  try {
    const { data } = await api.updateLog(id, log);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.entry);
  }
};

export const likeLog = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeLog(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.entry);
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    await api.deleteLog(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.entry);
  }
};
