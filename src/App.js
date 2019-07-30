import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./Reducers";
import ReduxThunk from "redux-thunk";
import Titles from './Components/Buttons/Titles';
import SleepList from './Components/SleepList';
const store = createStore(combinedReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
      <Titles />
      <SleepList />
    </Provider>
  );
}

export default App;
