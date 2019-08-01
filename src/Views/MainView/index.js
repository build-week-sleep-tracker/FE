import React, { useEffect } from "react";
import TopNav from "../../Components/Topnav";
import Titles from "../../Components/Buttons/Titles";
import GraphCanvas from "../../Components/Graph";
import Footer from "../../Components/Footer";
import { connect } from 'react-redux';
import { fetchSleeps } from '../../Actions/creators';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;

// Holds all the components for the Home/Main page

function MainViews(props) {
  useEffect(() => {
    props.fetchSleeps()
  }, [])
  return (
    <Wrapper>
      <TopNav />
      <GraphCanvas />
      <Titles />
      <Footer />
    </Wrapper>
  );
}


export default connect(
  null,
  {
    fetchSleeps
  }
)(MainViews);
