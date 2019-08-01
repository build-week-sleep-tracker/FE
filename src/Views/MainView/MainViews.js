import React from "react";
import TopNav from "../../Components/Topnav";
import Titles from "../../Components/Buttons/Titles";
import GraphCanvas from "../../Components/Graph";

// Holds all the components for the Home/Main page

export default function MainViews() {
  return (
    <div>
      <TopNav />
      <GraphCanvas />
      <Titles />
    </div>
  );
}
