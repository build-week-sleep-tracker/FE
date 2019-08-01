import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(77, 53, 212, 1)'
    },
    secondary: {
      main: 'rgba(52, 33, 161, 1)'
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.87)",
      hint: "rgba(255, 255, 255, 0.87)"
    },
    background: {
      paper: "rgba(16, 3, 89, 1)",
      default: "rgba(16, 3, 89, 1)"
    },
  }
});