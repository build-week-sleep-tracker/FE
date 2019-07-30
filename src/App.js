import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./Reducers";
import ReduxThunk from "redux-thunk";
import Topnav from "./Components/Topnav";

const store = createStore(combinedReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Topnav />
      </div>
    </Provider>
  );
}

export default App;
