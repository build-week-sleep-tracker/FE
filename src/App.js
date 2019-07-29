import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
      </div>
    </Provider>
  );
}

export default App;
