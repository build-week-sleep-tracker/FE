import React from "react";
import styled from "styled-components";
import Bed from "../../images/Bed.svg";
import Clock from "../../images/Clock.svg";
import Device from "../../images/Device.svg";
import Face from "../../images/Face.svg";
import Star from "../../images/Star.svg";
import Lightbulb from "../../images/Lightbulb.svg";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 32.5rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 30px;
  
  a {
    text-decoration: none;
  }
`;

const TitleBase = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  height: 8rem;
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogSleep = styled(TitleBase)`
  background-color:#BFB6F1;
  color: #100359;
`;

const Moods = styled(TitleBase)`
  background-color: #4D35D4;
  color: white;
`;

const Insights = styled(TitleBase)`
background-color:#100359;
color: white;
`;

export default function Titles() {
  return (
    <Container>
      <Link to='/sleeps'>
        <LogSleep>
          <img src={Bed} />
          <h3>Sleep Log</h3>
        </LogSleep>
      </Link>
      <Moods>
        <img src={Face} />
        <h3>Moods</h3>
      </Moods>
      <Insights>
        <img src={Lightbulb} />
        <h3>Insights</h3>
      </Insights>
    </Container>
  );
}
