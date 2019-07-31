import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const LogWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 500px;
  align-items: center;
  margin: 10px;
`;

const LogButton = styled.div`
  background-color: #100359;
  width: 95%;
  height: 20%;
  border-radius: 5px;
  margin-bottom: 5px;
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

export default function TrackerLog() {
  return (
    <Wrapper>
      <LogWrapper>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
        <LogButton>
          <LogTextWrapper>
            <LogText>Monday 12/31</LogText>
            <LogText>7hr 47min</LogText>
          </LogTextWrapper>
        </LogButton>
      </LogWrapper>
    </Wrapper>
  );
}
