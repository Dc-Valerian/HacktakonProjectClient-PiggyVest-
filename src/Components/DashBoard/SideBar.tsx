import React from 'react'
import styled from 'styled-components'
import {FiMenu, FiTarget, FiPower} from "react-icons/fi"
import img from "../Assets/piggy.svg"
import {ImHome2} from "react-icons/im"
import {IoIosRocket, IoMdPerson} from "react-icons/io"
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <Container>
        <Top>
            <Icon><FiMenu /></Icon>
           <Img to="/">
           <Image src={img} />
           </Img>
        </Top>
        <Home>
            <Icon2><ImHome2 /></Icon2>
            <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    backgroundColor: isActive ? "#fff" : "none",
                    borderTopLeftRadius: isActive ? "10px" : "none",
                    borderTopRightRadius: isActive ? "10px" : "none",
                    borderBottomRightRadius:isActive ? "10px" : "none",
                    Color: isActive ? "#2d3748" : "#fff",
                    marginLeft: isActive ? "15px" : "none"
                }
            }}>
                <Text1>Home</Text1>
            </NavLink>
        </Home>
        <Home >
            <Icon2><FiTarget /></Icon2>
            <NavLink to="/savings" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    backgroundColor: isActive ? "#fff" : "none",
                    borderTopLeftRadius: isActive ? "10px" : "none",
                    borderTopRightRadius: isActive ? "10px" : "none",
                    borderBottomRightRadius:isActive ? "10px" : "none",
                    Color: isActive ? "#2d3748" : "#fff",
                    marginLeft: isActive ? "15px" : "none"
                }
            }}>
            <Text2>Savings</Text2>
            </NavLink>
        </Home>
        <Home>
            <Icon2><IoIosRocket /></Icon2>
            <NavLink to="/invest" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    backgroundColor: isActive ? "#fff" : "none",
                    borderTopLeftRadius: isActive ? "10px" : "none",
                    borderTopRightRadius: isActive ? "10px" : "none",
                    borderBottomRightRadius:isActive ? "10px" : "none",
                    Color: isActive ? "#2d3748" : "#fff",
                    marginLeft: isActive ? "15px" : "none"
                }
            }}>
            <Text3>Invest</Text3>
            </NavLink>
        </Home>
        <Home>
            <Icon2><IoMdPerson /></Icon2>
            <NavLink to="/account" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    backgroundColor: isActive ? "#fff" : "none",
                    borderTopLeftRadius: isActive ? "10px" : "none",
                    borderTopRightRadius: isActive ? "10px" : "none",
                    borderBottomRightRadius:isActive ? "10px" : "none",
                    Color: isActive ? "#2d3748" : "#fff",
                    marginLeft: isActive ? "15px" : "none"
                }
            }}>
            <Text4>Account</Text4>
            </NavLink>
        </Home>

        <Power>
            <Icon2><FiPower /></Icon2>
            <Text>Logout</Text>
        </Power>
    </Container>
  )
}

export default SideBar
const Power = styled.div`
    width: 100%;
    display: flex;
    margin-top: 150px;  
    align-items: center;
`
const Text4 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text3 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text2 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    color: #fff;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */

    :hover{
      color: red;
    }
`
const Text1 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    text-decoration: none;
`
const Icon2 = styled.div`
    color: #fff;
    font-size: 23px;
    cursor: pointer;

   
`
const Home2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 45px;
`
const Home = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
`
const Img = styled(Link)`
    
`
const Image = styled.img`
    height: 25px;
    margin-left: 30px;
`
const Icon = styled.div`
    color: #fff;
    font-size: 25px;
`
const Top = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
`
const Container = styled.div`
    width: 19%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #062863;
    padding-left: 25px;
    position: fixed;
`
