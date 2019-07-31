import React from "react";
import styled from "styled-components";

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
  height: 500px;
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

  return (
    <Wrapper>
      <SleepContainerWrapper>
        <SleepContainer>
          <SleepText>Monday 12/31</SleepText>
          <SleepText>7hr 47min</SleepText>
        </SleepContainer>
      </SleepContainerWrapper>
    </Wrapper>
  );
}
