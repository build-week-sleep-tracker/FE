<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'
import MainViews from "./Views/MainView/MainViews";

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk)
);


function App() {
  return (
    <Provider store={store}>
      <MainViews />
    </Provider>
>>>>>>> development
  );
}



export default App;
