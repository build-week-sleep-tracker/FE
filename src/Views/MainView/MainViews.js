import React from "react";
import TopNav from "../../Components/Topnav";
import Titles from "../../Components/Buttons/Titles";
import GraphCanvas from "../../Components/Graph";
import Footer from "../../Components/Footer";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;

// Holds all the components for the Home/Main page

export default function MainViews() {
  return (
    <Wrapper>
      <TopNav />
      <GraphCanvas />
      <Titles />
      <Footer />
    </Wrapper>
  );
}
