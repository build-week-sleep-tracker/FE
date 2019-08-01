import React, { useState } from "react";
import styled from "styled-components";
import X from "../../images/X.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { DatePicker, TimePicker ,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerBox = styled.div`
  height: 70vh;
  width: 95%;
  background-color: #100359;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonDiv = styled.div`
  margin: 5px 5px 0 0;
`;

const LogTextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 20px;
`;

const LogText = styled.p`
  color: #fff;
  margin: 5px;
`;

const LogTimeWrapper = styled.div``;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[50],
      main: grey[50],
      dark: grey[50],
      contrastText: grey[50]
    },
    secondary: {
      light: grey[50],
      main: grey[50],
      dark: grey[50],
      contrastText: grey[50]
    },
    error: {
      light: grey[50],
      main: grey[50],
      dark: grey[50],
      contrastText: grey[50]
    }
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

function TimeStartInput() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form className={classes.container} noValidate>
        <TextField
          theme={theme.palette.primary}
          id="time"
          label="Went To Bed:"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />

        <DatePicker
          label="Basic example"
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
      </form>
    </MuiPickersUtilsProvider>
  );
}

function TimeEndInput() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Woke Up:"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />
        <TimePicker
          showTodayButton
          todayLabel="now"
          label="Step = 5"
          value={selectedDate}
          minutesStep={5}
          onChange={handleDateChange}
        />
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default function TrackerLogInput() {
  return (
    <Wrapper>
      <ContainerBox>
        <CloseButtonWrapper>
          <CloseButtonDiv>
            <img src={X} alt="close button" />
          </CloseButtonDiv>
        </CloseButtonWrapper>
        <LogTextWrapper>
          <LogText>Monday 12/31</LogText>
          <LogText>7hr 47min</LogText>
        </LogTextWrapper>

        <LogTimeWrapper>
          <TimeStartInput />
          <TimeEndInput />
        </LogTimeWrapper>
      </ContainerBox>
    </Wrapper>
  );
}
