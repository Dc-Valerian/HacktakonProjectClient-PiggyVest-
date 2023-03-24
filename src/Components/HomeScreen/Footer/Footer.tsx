import React from 'react'
import styled from 'styled-components'
import images from "../../Assets/logo7.png"


import {BsTwitter, BsLinkedin, BsGithub, BsYoutube, BsTwitch} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Images src={images} />
                <Down>© 2023 Alajo,Inc.</Down>
            </Left>
            <Right>
                <Start>
                    <Bold>Product</Bold>
                    <Navs>Savings</Navs>
                    <Navs>School Fees</Navs>
                    <Navs>Daily Svings</Navs>
                    <Navs>Daily Contributions</Navs>
                    <Navs>Alajo Online</Navs>  
                    <Navs>Local Market</Navs>
                    <Navs>Enterprise</Navs>
            
                </Start>
                <Start>
                    <Up>
                        <Bold>Company</Bold>
                    <Navs>Valerian Adimike</Navs>
                    <Navs>Jaji Yusuf</Navs>
                    <Navs>Judith Chinecherem </Navs>
                    </Up>
                    <Dow>
                        <Bold>Security and terms</Bold>
                    <Navs>Trust and Security</Navs>
                    <Navs>Privacy policy</Navs>
                    <Navs>Terms & Conditions</Navs>
                    </Dow>
                </Start>
                <Start>
                    <Bold>Social</Bold>
                   <NavLink to="https://github.com/Dc-Valerian" style={{textDecoration:"none"}}>
                    <Navs><Icons><BsGithub /></Icons>GitHub</Navs>
                   </NavLink>
                    <Navs><Icons><BsLinkedin /></Icons>LinkedIn</Navs>
                    <Navs><Iconss><BsGithub /></Iconss>FaceBook</Navs>
                    <Navs><Iconsss><BsYoutube /></Iconsss>YouTube</Navs>
                    <Navs><Iconssss><BsTwitch /></Iconssss>Twitch</Navs>
                </Start>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer
const Iconssss = styled.div`
    color: #9146FF;
    margin-right: 7px;
    margin-top: 2px;
`
const Iconsss = styled.div`
    color: #FF0000;
    margin-right: 7px;
    margin-top: 2px;
`
const Iconss = styled.div`
    color: black;
    margin-right: 7px;
    margin-top: 2px;
`
const Icons = styled.div`
    color: #0A66C2;
    margin-right: 7px;
    margin-top: 2px;
`
const Icon = styled.div`
    color: #1DA1F2;
    margin-right: 7px;
    margin-top: 2px;
`
const Dow = styled.div`
    width: 100%;
    height: 35%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
`
const Up = styled.div`
    width: 100%;
    height: 65%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    margin-bottom: 33px;
`
const Navs = styled.div`
    font-size: 15px;
    display: flex;
    line-height: 24px;
    align-items: center;
    font-weight: 400;
    color: rgb(107, 107, 107);
    margin-bottom: 7px;
    cursor: pointer;
    :hover{
        color:#063971;
    }
`
const Bold = styled.h2`
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: -0.12px;
    color: rgb(78, 78, 78);
    margin: 0;
    font-weight: 600;
    padding-bottom: 10px;
`
const Start = styled.div`
    height: 100%;
    width: 185px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    /* margin-right: 40px; */
    @media screen and (max-width: 410px){
        margin-bottom: 15px;
    }
`
const Right = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    /* background-color: green; */
    justify-content: space-between;
    @media screen and (max-width: 774px){
        width: 100%;
    }
`
const Down = styled.div`
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(166, 166, 166);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    margin-top: -20px;
`
const Images = styled.img`
    height: 200px;
    
`
const Left = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 774px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 110px;

    @media screen and (max-width:500px) {
    margin-top: -30%;
      background-color:aquamarine;
    }
    @media screen and (max-width:768px) {
      margin-top: 200px;
    }
    /* margin-bottom: 10px; */
    /* background-color: aliceblue; */
`
