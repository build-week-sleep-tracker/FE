import React from 'react';
import styled from 'styled-components';

const SleepContainer = styled.li`
  width: 92.5%;
  height: 2.4rem;
  border-radius: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #BFB6F1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;

export default function Sleep(props) {
  const { sleep } = props;

  return (
    <SleepContainer>
      asdfasdff
    </SleepContainer>
  )
}
