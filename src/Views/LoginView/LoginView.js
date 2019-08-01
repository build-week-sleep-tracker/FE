import React from "react";
import TopNav from "../../Components/Topnav";
import Signin from "../../Components/Signin";
import Footer from "../../Components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;
`;

// Holds all the components for the Signup page

export default function RegisterView() {
  return (
    <Wrapper>
      <TopNav />
      <Signin />
      <Footer />
    </Wrapper>
  );
}
