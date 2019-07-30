import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: #100359;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  padding: 3px;
  width: 75px;
`;

const Nav = styled.div`
  margin: 5px;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background: white;
  margin: 5px;
`;

export default function Topnav(props) {
  return (
    <NavWrapper>
      <Logo src={logo} />
      <Nav>
        <Line />
        <Line />
        <Line />
      </Nav>
    </NavWrapper>
  );
}
