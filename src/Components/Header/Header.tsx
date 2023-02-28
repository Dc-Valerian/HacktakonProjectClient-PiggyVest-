import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from "../Assets/logo.svg"

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo to="/">
            <Img src={logo}/>
          </Logo>

          <NavLink >
            <Nav to="register">Save</Nav>
            <Nav to ="">Invest</Nav>
            <Nav to ="">Stories</Nav>
            <Nav to="">FAQs</Nav>
            <Nav to ="">Blog</Nav>
            <Nav to="">E-Book</Nav>
          </NavLink>

          <ButtonHold>
            <Button bg="blue" cl="black">
              Sign In
            </Button>
             <Button bg="black" cl="white">
               Create Free Account
             </Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header
const Button = styled.div<{bg:string; cl:string}>`
margin: 5px;
height: 40px;
width: 120px;
background-color:${(props)=>props.bg};
color:${(props)=>props.cl}
`

const ButtonHold = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Nav = styled(Link)`
margin: 5px;
color: black;
text-decoration: none;
font-size: 20px;
font-weight: 600;
`

const NavLink = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 35%;
`

const Img = styled.img`
width:80%;
height:60%;
object-fit: cover;
`

const Logo = styled(Link)`
height:75px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const Wrapper = styled.div`
/* background-color: blueviolet; */
display: flex;
justify-content: space-around;
width: 90%;

`

const Container = styled.div`
width: 100%;
background-color: red;
height: 90px;
justify-content: center;
display: flex;
align-items: center;
`
