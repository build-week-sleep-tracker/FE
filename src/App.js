import React from 'react';
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'

// const store = createStore(
//   combinedReducers,
//   {},
//   applyMiddleware(thunk)
// );


function App() {
  return (
//    <Provider store={store}>
      <div className="App">
      <GraphCanvas/>
      </div>
//    </Provider>
  );
}



export default App;
