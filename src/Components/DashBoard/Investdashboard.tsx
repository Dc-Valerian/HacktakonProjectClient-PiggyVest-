import React from "react";
import styled from "styled-components";
import Savings from "../../Savings/Savings";
import Account from "../Account/Account";
import Invest from "../Invest/Invest"
import SideBar from "./SideBar";

const SavingsDashboard = () => {
  return (
    <div>
      <Container>
        <SideBar />
        <Invest/>
      </Container>
    </div>
  );
};

export default SavingsDashboard;

const Container = styled.div`
  display: flex;
`;
