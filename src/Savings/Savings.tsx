import React from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import CardProps from "./CardProps";
// import Cards from "./Cards";
// import Todo from "./Todo";
import { BsFillShieldFill } from "react-icons/bs";

const Savings = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Left>
            <Bold>
              <h1>Savings</h1>
            </Bold>
            <P>
              <p>Let's see how well you're doing.</p>
            </P>
          </Left>
        </Top>
        <Middle>
          <One>
            <p>Total Balance </p>
            <h1>₦0.00</h1>
          </One>
          <Two></Two>
        </Middle>
        <Bottom>
          <CardProps
            h1="Piggybank"
            p="Strict savings automatically. Daily, weekly or Monthly. 10% p.a"
            naira="₦0.00"
            bg="rgb(204, 240, 254)"
            icn=""
          />
          <CardProps
            h1="Flex Naira"
            p="Flexible savings for emergencies. Free transfers, withdrawals etc. 8% p.a"
            naira="₦0.00"
            bg="rgb(231, 67, 156)"
            icn=""
          />
          <CardProps
            h1="Safelock"
            p="Lock funds to avoid temptations. Upfront interest. Up to 13% p.a"
            naira="₦0.00"
            bg="rgb(231, 246, 255)"
            icn=""
          />
          <CardProps
            h1="Targets"
            p="Reach your unique individual saving goals. 9% p.a"
            naira="₦0.00"
            bg="rgb(220, 255, 235)"
            icn=""
          />
          <CardProps
            h1="Flex Dollar"
            p="Save & grow your wealth in dollars. Up to 7% p.a in dollars"
            naira="₦0.00"
            bg="rgb(239, 244, 245)"
            icn=""
          />
          <CardProps
            h1="PocketApp"
            p="Withdraw your savings to your pocket faster ⚡️"
            naira="₦0.00"
            bg="rgb(241, 236, 254)"
            icn=""
          />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Savings;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Two = styled.div``;

const One = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding: 100px; */
  width: 700px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 5px;

  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
    margin-left: 15px;
    margin-bottom: 7px;
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    font-family: U8, sans-serif;

    margin: 0;
    margin-left: 15px;
    margin-bottom: 7px;
    color: #083e9e;
  }
`;

const Middle = styled.div`
  margin-top: 30px;
`;

const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  h1 {
    font-size: 29px;
    color: #000;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
`;
const Container = styled.div`
  width: calc(100% - 19%);
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-left: 290px;
  /* background-color: red; */
`;
