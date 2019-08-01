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

export const setCurrentSleep = (id) => {
  return {
    type: types.SET_CURRENT_SLEEP,
    payload: id,
  }
}

export const addSleep = (fields) => dispatch => {
  return axiosWithAuth().post(CreateAPIUrl(`sleeps`), fields)
    .then(res => {
      dispatch(fetchSleeps());
    })
    .catch(error => {
      dispatch(setError(error.message));
    });
}

export const updateSleep = (fields, id) => dispatch => {
  return axiosWithAuth().put(CreateAPIUrl(`sleeps/${id}`), fields)
    .then(res => {
      dispatch(fetchSleeps());
    })
    .catch(error => {
      dispatch(setError(error.message));
    });
}

export const deleteSleep = (id) => dispatch => {
  return axiosWithAuth().delete(CreateAPIUrl(`sleeps/${id}`))
    .then(res => {
      dispatch(fetchSleeps());
    })
    .catch(error => {
      dispatch(setError(error.message));
    });
}


export const login = (email, password) => dispatch => {
  const body = { email, password };
  return axios.post(CreateAPIUrl('login'), body)
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token)
    })
    .catch(error => {
      dispatch(setError(error.message));
    });
};

export const register = (email, password, firstName, lastName) => dispatch => {
  const body = { email, password, first_name: firstName, last_name: lastName };
  return axios.post(CreateAPIUrl('register'), body)
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token)
    })
    .catch(error => {
      dispatch(setError(error.message));
    })
}