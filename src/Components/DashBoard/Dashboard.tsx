import React from "react";
import styled from "styled-components";

import Home from "./Home";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Home />
    </Container>
  );
};

export default Dashboard;
const Container = styled.div`
  display: flex;
`;
