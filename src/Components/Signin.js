import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e1f9;
  width: 80%;
  height: 50vh;
  border: 1px solid #e5e1f9;
`;

const Form = styled.form`
  width: 80%;
`;

const Title = styled.h1`
  color: #100359;
  font-size: 1.3rem;
  text-align: center;
  margin: 15px 10px;
  font-weight: 700;
`;

const TextFields = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const InputDiv = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 3px;
  border-style: none;
  border: 1px solid #16679c;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const LabelText = styled.p`
  color: #100359;
  margin-bottom: 0;
  font-weight: 500;
  margin: 10px 0 10px 0;
`;

const SignButtonsDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const SignUpDiv = styled.div`
  display: flex;
  margin: 15px auto;
  width: 100%;
  justify-content: center;
`;

const SignUpButton = styled.button`
  width: 65%;
  height: 40px;
  border-radius: 3px;
  border-style: none;
  background-color: #16679c;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const SignInDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
`;

const SignInText = styled.p`
  color: #100359;
  margin-bottom: 0;
  margin-right: 10px;
  font-weight: 500;
`;

const SignInButton = styled.button`
  width: 25%;
  height: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #5babe0;
  border-style: none;
  border-radius: 3px;
  color: #0a3f61;
`;

export default function Signin() {
  return (
    <Wrapper>
      <FormDiv>
        <Title>Welcome to Sleep Tracker!</Title>
        <Form>
          <TextFields>
            <InputDiv>
              <LabelText>Email</LabelText>
              <Input />
            </InputDiv>
            <InputDiv>
              <LabelText>Password</LabelText>
              <Input />
            </InputDiv>
          </TextFields>
          <SignButtonsDiv>
            <SignUpDiv>
              <SignUpButton> Sign In</SignUpButton>
            </SignUpDiv>
            <SignInDiv>
              <SignInText>Don't have an account?</SignInText>
              <SignInButton>Sign Up</SignInButton>
            </SignInDiv>
          </SignButtonsDiv>
        </Form>
      </FormDiv>
    </Wrapper>
  );
}
