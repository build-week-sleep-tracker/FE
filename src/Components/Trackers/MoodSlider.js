import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const Text = styled.p`
  //   color: #fff;
  font-weight: 500;
`;

const EmojiDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Emoji = styled.p`
  padding: 8px;
`;

// const ButtonsDiv = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
// `;

// const Edit = styled.button``;

// const Save = styled.button``;

const SliderDiv = styled.div``;

// const SliderInput = styled.input``;

export default function MoodSlider() {
  const sliderRef = React.createRef();
  // sliderRef.current.value
  return (
    <Wrapper>
      <Text>Waking Mood:</Text>
      <EmojiDiv>
        <Emoji>😴</Emoji>
        <Emoji>😔</Emoji>
        <Emoji>🙂</Emoji>
        <Emoji>😊</Emoji>
      </EmojiDiv>
      <SliderDiv>
        <input
          type="range"
          min="1"
          max="4"
          defaultValue="2"
          className="slider"
          step="1"
          id="myRange"
          ref={sliderRef}
        />
      </SliderDiv>
      {/* <ButtonsDiv>
        <Edit>Edit</Edit>
        <Save>Save</Save>
      </ButtonsDiv> */}
    </Wrapper>
  );
}
