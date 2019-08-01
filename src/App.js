import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./Reducers";
import ReduxThunk from "redux-thunk";
import Titles from "./Components/Buttons/Titles";
import SleepList from "./Components/SleepList";
import Topnav from "./Components/Topnav";
import TrackerLogInput from "./Components/Trackers/TrackerLogInput";
import Sleeps from "./Components/SleepList/Sleeps";
import MoodSlider from "./Components/SleepList/MoodSlider";
import MainViews from "./Views/MainView/MainViews";
import RegisterView from "./Views/RegisterView/RegisterView";

const store = createStore(combinedReducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
      <RegisterView />
    </Provider>
  );
}

export default App;
