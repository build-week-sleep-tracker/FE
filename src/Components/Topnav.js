import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import ethan from "../images/ethan.jpg";

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

const ProfilePic = styled.img`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 3px;
`;

export default function Topnav(props) {
  return (
    <NavWrapper>
      <Logo src={logo} />
      <ProfilePic src={ethan} />
    </NavWrapper>
  );
}
