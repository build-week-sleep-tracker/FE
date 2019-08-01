import React from "react";
import styled from "styled-components";
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SleepContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  margin: 10px;
`;

const SleepContainer = styled.li`
  width: 92.5%;
  height: 2.4rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #100359;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
`;

const SleepText = styled.p`
  color: #fff;
  margin: 5px;
`;

/*
  sleep.sleepLength

  sleep.date
  
*/

export default function Sleep(props) {
  const { sleep } = props;
  const formattedDate = moment(sleep.date).format('dddd DD/MM');
  var tempTime = moment.duration(sleep.sleepLength);
  var formattedTime = `${tempTime.hours()}hr${tempTime.minutes()}mins`;
  return (
    <Wrapper>
      <SleepContainerWrapper>
        <SleepContainer>
          <SleepText>{formattedDate}</SleepText>
          <SleepText>{formattedTime}</SleepText>
        </SleepContainer>
      </SleepContainerWrapper>
    </Wrapper>
  );
}
