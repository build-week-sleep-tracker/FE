import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 5rem;
  font-size: 1.2rem;
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

const SliderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 0.8rem;
  box-sizing: border-box;
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */

    margin: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }


  input[type=range]::-webkit-slider-thumb {
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: #9D90EA;
    margin-top: -8px;
  }

  input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: #F6F4FF;
  border-radius: 1px;
  border: 0.2px solid #010101;
}


`;

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
