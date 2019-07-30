import * as types from './types';
import axiosWithAuth from '../axios/axiosWithAuth';
import axios from 'axios';

const baseURL = 'https://bw-sleep-tracker.herokuapp.com/api';

const CreateAPIUrl = extension => {
  return `${baseURL}/${extension}`;
};

export const setSleeps = (sleeps) => {
  return {
    type: types.SET_SLEEPS,
    payload: sleeps
  };
}

export const setError = (err) => {
  return {
    type: types.SET_ERROR,
    payload: err
  };
}

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user
  };
}

export const fetchSleeps = () => dispatch => {
  return axiosWithAuth()
      .get(CreateAPIUrl('sleeps'))
      .then(res => {
          dispatch(setSleeps(res.data));
      })
      .catch(error => {
          dispatch(setError(error.message));
      });
};

export const login = () => dispatch => {
  return axios.get(CreateAPIUrl('login'))
    .then(res => {
      dispatch(setUser(res.data));
    })
    .catch(error => {
      dispatch(setError(error))
    });
};