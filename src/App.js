import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import combinedReducers from './Reducers';
import GraphCanvas from './Components/Graph'
import MainViews from "./Views/MainView/";
import LoginView from './Views/LoginView/';
import RegisterView from './Views/RegisterView/';
import SleepsView from './Views/SleepsView';
import TrackerInput from './Components/Trackers/TrackerLogInput';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './Styling/theme';
import SignIn from './Components/Signin';
import CharacterList from "./Components/CharacterList"

const store = createStore(
  combinedReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem('token');
        return token ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
      }
    />
  );
}

const LoginRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem('token');
        return token ? (
          <Redirect to="/" />
        ) : (
            <Component {...props} />
          )
      }
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
          <LoginRoute path='/login' component={LoginView} />
          <Route path='/register' component={RegisterView} />
          <PrivateRoute path='/sleeps' component={SleepsView} />
          <Route path='/characters' component={CharacterList} />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
