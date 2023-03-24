import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import CardProps from './CardProps'
import piggy from "../../Assets/piggy.png"
import lock from "../../Assets/safelock.png"
import target from "../../Assets/target.png"
import flex from "../../Assets/flex.png"



const Build = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <span>
                    4 ways to build <br /> your savings
                    </span>
                    <p>
                    Earn 5%-15% when you save with any <br /> of these PiggyVest plans.
                    </p>
                  <NavLink to="/signup">
                  <Button >Start Saving</Button>
                  </NavLink>
                </First>
                <Second>
                    <CardProps
                    text1='Automated Savings'
                    text2='Build a dedicated savings faster on your terms automatically or manually'
                    ButtonText='PiggyBank'
                    image={piggy}
                    bcc="#E4F0FD"
                    color="blue"
                    />
                    <CardProps
                    text1="Fixed Savings"
                    text2="Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
                    ButtonText='Safelock'
                    image={lock}
                    bcc="#E7F5FD"
                    color="#58A9FD"
                    />
                    <CardProps
                    text1='Goal-oriented Savings'
                    text2="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
                    ButtonText='Target Savings'
                    image={target}
                    bcc="#E7FDF0"
                    color="#34AC62"
                    />
                    <CardProps
                    text1="Flexible Savings"
                    text2="Save, transfer, withdraw, manage and organise your money for free at any time."
                    ButtonText="Flex Naira"
                    image={flex}
                    bcc="#FBE9F5"
                    color="#E850A1"
                    />
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Build
const Button = styled.button`
  width: 170px;
    height: 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-right: 20px;
    background-color: #031e3b;

    :hover {
      scale: 0.97;
      cursor: pointer;
      transition: all 350ms;
      background-color: #fff;
      border: 1px solid #063971;
      color: #063971;
    }
`

const Second = styled.div`
display: flex;
flex-wrap: wrap;
padding-bottom: 10px;
justify-content: flex-end;
align-items: flex-end;
width: 70%;

@media screen and (max-width:500px) {
    display: flex;
    align-items: center;
    justify-content: center;
}

`

const First = styled.div`
@media screen and (max-width:500px) {
 display: flex;
 align-items: center;
 /* justify-content: center; */
 flex-direction: column;
}

span{
    font-weight: bold;
    font-size: 35px;

    @media screen and (max-width:500px) {
        text-align: center;
        font-size: 28px;
        font-family: U8-Bold;
        line-height: 38px;
        vertical-align: baseline;
        letter-spacing: normal;
        word-spacing: 0px;
        font-style: normal;
        font-weight: 700;
    }
}

p{
    vertical-align: baseline;
    font-size:18px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width:500px) {
        text-align: center;
        font-family: "DM Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 27.2px;
        vertical-align: baseline;
        letter-spacing: normal;
        font-style: normal;
        font-variant: normal;

    }
}
`

const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;

@media screen and (max-width:500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
@media screen and (max-width:768px) {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    grid-template-columns: repeat(2 ,1fr);

}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 120px;
margin-bottom: 20px;

@media screen and (max-width: 500px) {
    margin-top: 50px;
}

@media screen and (max-width:768px) {
    grid-template-columns: repeat(2 ,1fr);

}
`