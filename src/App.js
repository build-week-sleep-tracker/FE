import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'
import MainViews from "./Views/MainView";
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
// import SleepView from './Views/SleepView';
import TrackerInput from './Components/SleepList/TrackerLogAdd';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './Styling/theme';
import SignIn from './Components/Signin';
import Cookies from 'universal-cookie';

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk)
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const session = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        session ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <PrivateRoute exact path='/' component={MainViews} />
          <Route path='/login' component={LoginView} />
          <Route path='/register' component={RegisterView} />
          {/* <PrivateRoute path='/sleeps' component={SleepView} /> */}
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
