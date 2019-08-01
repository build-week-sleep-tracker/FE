import React, { useState } from "react";
import styled from "styled-components";
import X from "../../images/X.svg";
import { DatePicker, TimePicker ,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as Colors from '../../Styling/colors';
import color from 'color';
import MoodSlider from './MoodSlider';

const backgroundColor = color(Colors.secondary).alpha(0.6).string();

const ModalWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  background: ${backgroundColor};
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  color: rgba(255, 255, 255, 0.87);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${Colors.secondary};
  width: 95vw;
  height: 110vw;
  border-radius: 3vw;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`;

const CloseButton = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 1rem;
  justify-content: flex-end;
  margin: 5px 5px 0 0;
`;

const StyledPicker = styled.div`
  width: 10rem;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

function TimeStartInput() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
      <TimePicker
        showTodayButton
        todayLabel="now"
        value={selectedDate}
        minutesStep={5}
        onChange={handleDateChange}
      />
  );
}

function TimeEndInput() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
      <TimePicker
        showTodayButton
        todayLabel="now"
        value={selectedDate}
        minutesStep={5}
        onChange={handleDateChange}
      />
  );
}

export default function TrackerLogInput() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ModalWrapper>
        <Modal>
          <Title>Add Sleep Log</Title>
          <CloseButton>
            <img src={X} alt="close button" />
          </CloseButton>
          <StyledPicker>
            <h3>Date:</h3>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
            />
          </StyledPicker>
          <StyledPicker>
            <h3>Went to Bed:</h3>
            <TimeStartInput />
          </StyledPicker>
          <StyledPicker>
            <h3>Woke Up:</h3>
            <TimeEndInput />
          </StyledPicker>
          <MoodSlider />
        </Modal>
      </ModalWrapper>
    </MuiPickersUtilsProvider>
  );
}
