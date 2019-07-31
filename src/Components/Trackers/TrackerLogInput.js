import React from "react";
import styled from "styled-components";
import X from "../../images/X.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

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

  return (
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
    </form>
  );
}

function TimeEndInput() {
  const classes = useStyles();

  return (
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
    </form>
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
