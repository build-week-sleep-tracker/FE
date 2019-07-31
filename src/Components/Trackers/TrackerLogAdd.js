import React from "react";
import styled from "styled-components";
import AddIcon from "../../images/AddIcon.svg";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const LogSleepDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogSleepText = styled.h1`
  color: #100359;
  font-size: 2rem;
  font-weight: 600;
`;

const LogSleepAdd = styled.div``;

export default function TrackerLogAdd() {
  return (
    <Wrapper>
      <LogSleepDiv>
        <LogSleepText>Log Sleep</LogSleepText>
        <LogSleepAdd>
          <img src={AddIcon} />
        </LogSleepAdd>
      </LogSleepDiv>
    </Wrapper>
  );
}
