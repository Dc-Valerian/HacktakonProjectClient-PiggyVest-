import React from "react";
import styled from "styled-components";
import { FiMenu, FiTarget, FiPower } from "react-icons/fi";
import img from "../Assets/piggy.svg";
import { ImHome2 } from "react-icons/im";
import { IoIosRocket, IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <Container>
      <Top>
        <Icon>
          <FiMenu />
        </Icon>
        <Image src={img} />
      </Top>
      <Home to="/dashboard">
        <Icon2>
          <ImHome2 />
        </Icon2>
        <Text>Home</Text>
      </Home>
      <Home2 to="/savings">
        <Icon2>
          <FiTarget />
        </Icon2>
        <Text>Savings</Text>
      </Home2>
      <Home2 to="">
        <Icon2>
          <IoIosRocket />
        </Icon2>
        <Text>Invest</Text>
      </Home2>
      <Home2 to="">
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <Text>Account</Text>
      </Home2>

      <Power>
        <Icon2>
          <FiPower />
        </Icon2>
        <Text>Logout</Text>
      </Power>
    </Container>
  );
};

export default SideBar;
const Power = styled.div`
  width: 100%;
  display: flex;
  margin-top: 195px;
`;
const Text = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  color: #fff;
  align-items: center;
  display: flex;
  margin-left: 30px;
`;
const Icon2 = styled.div`
  color: #fff;
  font-size: 23px;
  cursor: pointer;
`;
const Home2 = styled(NavLink)`
  width: 100%;
  display: flex;
  margin-top: 45px;
`;
const Home = styled(NavLink)`
  width: 100%;
  display: flex;
  margin-top: 70px;
`;
const Image = styled.img`
  height: 25px;
  margin-left: 30px;
`;
const Icon = styled.div`
  color: #fff;
  font-size: 25px;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
const Container = styled.div`
  width: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #062863;
  padding-left: 25px;
  position: fixed;
`;
