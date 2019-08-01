import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 5vh;
  background-color: #100359;
`;

const Text = styled.p`
  color: #fff;
  font-size: 0.7rem;
  margin: 0 10px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>© 2019 Sleep Tracker</Text>
        <Text>Terms Of Service</Text>
        <Text>Privacy Policy</Text>
      </TextWrapper>
    </Wrapper>
  );
}
