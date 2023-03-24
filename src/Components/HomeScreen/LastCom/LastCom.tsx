import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import phone from "../../Assets/phone.png";

const LastCom = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <img src={phone} alt="" />
          </Left>
          <Right>
            <H3> Let's Start Today</H3>
            <H1>Stay Connected With the Right Source That all you need.</H1>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
            <Btn>
            <NavLink to="/signup">
            <Button>Get started Now</Button>
            </NavLink>
            </Btn>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LastCom;

const Right = styled.div`
  width: 50%;
  /* margin-top: 30px; */
  padding: 20px;
  color: #fff;
  /* background-color: red; */

  h3 {
    margin: 0;
  }

  @media screen and (max-width: 770px) {
    width: 90%;
  }
`;

const H1 = styled.div`
  line-height: 1.1;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: bold;

  @media screen and (max-width: 350px) {
    font-weight: 500;
    font-size: 30px;
  }
`;
const H3 = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

const P = styled.div`
  margin: 0;
  margin-bottom: 10px;
`;

const Left = styled.div`
  width: 50%;

  margin-right: 20px;

  @media screen and (max-width: 770px) {
    width: 70%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Btn = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #063971;
    margin-right: 20px;

    :hover {
      scale: 0.97;
      cursor: pointer;
      transition: all 350ms;
      background-color: #063971;
      border: 1px solid white;
      color: #fff;
    }
  
  
`

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #031e3b;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
  /* margin-top: 20px; */
`;
