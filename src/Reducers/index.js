import { combineReducers } from 'redux';
import * as types from '../Actions/types';

const sleepState = {
  sleeps: [],
}

const userState = {
  user: {},
}

const apiState = {
  error: null,
}


export function sleepsReducer(state = sleepState, action) {
  switch(action.type) {
    case(types.SET_SLEEPS):
      return { ...state,  sleeps: action.payload};
    default:
      return state;
  }
}

export function userReducer(state = userState, action) {
  switch(action.type) {
    case(types.SET_USER):
      return { ...state, user: action.payload }
    default:
      return state;
  }
}

export function apiReducer(state = apiState, action) {
  switch(action.type) {
    case(types.SET_ERROR):
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  sleeps: sleepsReducer,
  user: userReducer,
  api: apiReducer,
});