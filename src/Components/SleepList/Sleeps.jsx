import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SleepContainer = styled.li`
  width: 92.5%;
  height: 2.4rem;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #100359;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
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
      <SleepContainer>
        <SleepText>{sleep.date}</SleepText>
        <SleepText>{sleep.length}</SleepText>
      </SleepContainer>
    </Wrapper>
  );
}
