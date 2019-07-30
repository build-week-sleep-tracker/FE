import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'

function App() {
  return (
      <div className="App">
      <GraphCanvas/>
      </div>
  );
}

export default App;
