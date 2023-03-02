import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from "../../Assets/logo.svg"

const Header = () => {
  const [show,setShow] = React.useState(false)

  const changeHeaderColor =()=>{
    if(window.scrollY >= 1){
      setShow(true)
    }else{
      setShow(false)
    }
  }


  window.addEventListener("scroll",changeHeaderColor)
  return (
    <div>
      <Container boxShadow={show ? "value":""} id="header">
        <Wrapper>
          <Logo to="/">
            <Img  src={logo}/>
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
            <Button to="login" bg="white" cl="black" wd="100px" bcc='whitesmoke' ccl='#0D5ED4' >
              Sign In
            </Button>
             <Button to="register" bg="black" cl="white" wd="220px" bcc='#0D5ED4' ccl=''>
               Create Free Account
             </Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header
const Button = styled(Link)<{bg:string; cl:string; wd:string; bcc:string ;ccl:string}>`
margin: 5px;
height: 50px;
width: ${(props)=>props.wd};
background-color:${(props)=>props.bg};
color:${(props)=>props.cl};
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
outline: none;
border: none;
font-size: 20px;
font-weight:500;
cursor: pointer;
text-decoration: none;
transition: all 400ms;
border: 1px solid black;


:hover{
  background-color: ${(props)=>props.bcc};
  border: 1px solid blue;
  color: ${(props)=>props.ccl};
  transform: scale(0.98);
}
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

const Container = styled.div<{boxShadow :string}>`
width: 100%;
/* background-color: red; */
height: 90px;
justify-content: center;
display: flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
position: fixed;
top: 1;
background-color: #FFFFFF;
z-index: 3;
`
