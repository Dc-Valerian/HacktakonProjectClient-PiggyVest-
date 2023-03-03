import React from "react";
import styled from "styled-components";
import Savings from "../../savings/Savings";
import SideBar from "./SideBar";

const SavingsDashboard = () => {
  return (
    <div>
      <Container>
        <SideBar />
        <Savings />
      </Container>
    </div>
  );
};

export default SavingsDashboard;

const Container = styled.div`
  display: flex;
`;
