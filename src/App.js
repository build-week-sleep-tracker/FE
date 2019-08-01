import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'
import MainViews from "./Views/MainView/MainViews";
import SigninViews from "./Views/SigninView/SigninViews";
import SignupViews from "./Views/SignupView/SignupViews";

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk)
);


function App() {
  return (
    <Provider store={store}>
      <MainViews />
      <SigninViews />
      <SignupViews />
    </Provider>
  );
}



export default App;
