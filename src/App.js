import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'
import MainViews from "./Views/MainView/MainViews";
import Insights from './Components/Insights/Insights'

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk)
);


function App() {
  return (
    <Provider store={store}>
     <Insights />
    </Provider>
  );
}



export default App;
