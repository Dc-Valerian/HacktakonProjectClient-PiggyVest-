import React from 'react'
import styled from 'styled-components'
import one from "../../Assets/one.png"
import two from "../../Assets/two.png"
import three from "../../Assets/three.png"
import four from "../../Assets/four.png"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import appleIcon from "../../Assets/apple-icon.svg"
import googleIcon from "../../Assets/google-icon.svg"
import hero from "../../Assets/img10.svg"
import nice from "../../Assets/pexels-cottonbro-studio-3206114.jpg"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        <Second>
           <Pic src={hero}/>
           {/* <One src={nice}/> */}
           {/* <Two src={two}/> */}
           {/* <Three src={three}/> */}
           {/* <Four src={four}/> */}
          </Second>
          <First>
            <Title>
            The Better Way  <br /> to Save & Invest.
            </Title>
            <Sub>
            Alajo helps over 4 million customers achieve their financial
            <br />
             goals by helping them save and invest with ease.
             <br />
             We are using mobile technology and agency banking to improve cash flow, eliminate errors  and increase profit for our users
            </Sub>
       <NavLink to="/signup">
       <Button>
              Create Free Account
            </Button>
       </NavLink>
            <ButtonHold>
              <Buttons>
                <Icon>
                  <img src={appleIcon}/>
                </Icon>
                Get on iPhone
              </Buttons>
              <Buttons>
                <Icon>
                  <img src={googleIcon}/>
                </Icon>
                Get on Android
              </Buttons>
            </ButtonHold>
          </First>
        
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Pic = styled.img`
width: 90%;
height: 80%;
object-fit: cover;

@media screen and (max-width:500px) {
  width: 300px;
  height:400px; 
   margin-bottom: 250px;

}
`

const Icon = styled.div`
margin: 5px;
height: 20px;
font-size: 30px;
justify-content: center;
display: flex;
align-items: center;
color: black;
`

const Second = styled.div`
position: relative;
/* background-color: red; */
width: 88%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:500px) {
  /* background-color: red; */
  width: 30%;
}
`
const Four = styled.img`
position: absolute;
z-index: 2;
object-fit: cover;
height: 80px;
width: 250px;
left: -150px;
top: 250px;
`

const Three = styled.img`
position: absolute;
height: 90px;
width: 250px;
z-index: 2;
object-fit: cover;
right:9%;
bottom: 20%;
`

const Two = styled.img`
position: absolute;
/* z-index: 3; */

@media screen and (max-width:500px) {
  height: 70%;
  width: 190%;
}
`

const One = styled.img`
position: absolute;
left: 2px;
z-index: 1;
width: 68%;
height: 78%;
object-fit: cover;
border-radius: 20px;

@media screen and (max-width:500px) {
  height: 65%;
  width: 190%;
  right: 30px;
}

`

const Buttons = styled.div`
margin: 5px;
height: 50px;
width:180px;
background-color: white;
color: black;
justify-content: center;
align-items: center;
display: flex;
font-size: 15px;
font-weight: 500;
border-radius: 10px;
cursor: pointer;
outline: none;
border: none;
border: 1px solid black;
margin-top: 10px;
transition: all 400ms;

:hover{
  margin-top: -2px;
  transform: scale(0.99);
}

@media screen and (max-width:500px) {
  width: 160px;
}
`

const Button = styled.button`
width: 180px;
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

 @media screen and (max-width:320px) {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 230px; */
  margin-right: 30px;
 }
 @media screen and (max-width:500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  width: 230px;
 }
`

const ButtonHold = styled.div`
display: flex;
margin: 5px;
@media screen and (max-width:500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`

const Sub = styled.div`
color: #5A3535;
margin: 15px;
vertical-align: baseline;
text-decoration: none solid rgb(53,53,53);
font-weight: 400;
color: rgb(53,53,53);
background-color: rgba(0,0,0,0);
font-size: 16.5px;
line-height: 27.2px;


@media screen and (max-width:500px) {
  background-color: rgba(0,0,0,0);
  color: rgb(53,53,53);
  font-family: "DM Sans";
  font-size: 18px;
  line-height: 27.2px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: 400;
  text-align: center;
}
`

const Img = styled.img``

const Title = styled.div`
font-weight: 800;
line-height: 82.42px;
color:#031e3b;
background-color: rgba(0,0,0,0);
font-size: 65px;
vertical-align: baseline;
text-align: start;
font-style: normal;

@media screen and (max-width:500px) {
  font-family: U8-Bold;
  font-size: 43px;
  line-height: 57px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 1px;
  font-weight: 700;
text-align: center;
  text-transform: none;
}
`


const First = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;
`

const Wrapper = styled.div`
/* background-color: navajowhite; */
display: flex;
align-items: center;
justify-content: space-between;
width:90% ;
height: 100%;
margin-top: 90px;

@media screen and (max-width:500px) {
  display: flex;
  flex-direction: column;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 20px;
/* background-color: red; */
`