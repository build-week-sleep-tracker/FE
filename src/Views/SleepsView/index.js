import React from "react";
import TopNav from "../../Components/Topnav";
import SleepList from '../../Components/SleepList';
import Footer from "../../Components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;


export default function RegisterView() {
  return (
    <Wrapper>
      <TopNav />
      <SleepList />
      <Footer />
    </Wrapper>
  );
}
