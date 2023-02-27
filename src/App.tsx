import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import spider from "./Image/spider.jpg"

function App() {
  return (
    <div className="App">
    <Container>
      <Wrapper>
        <Header>
          <Logo>VALERIAN</Logo>

          <NavHold>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Service</a>
          </NavHold>
          <ButtonHold>
            <Button>
              Login
            </Button>
            <Button>
              Sign Up 
            </Button>
          </ButtonHold>
        </Header>
        <Hero>
          <First>
            <h1>
              Just Practicing
            </h1>
           <p>
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Doloribus assumenda officiis <br /> nobis soluta itaque necessitatibus expedita
           </p>
          </First>
          <Second>
            <img src={spider} alt="spiderman" />
          </Second>
        </Hero>
      </Wrapper>
    </Container>
    </div>
  );
}

export default App;
const Second = styled.div`
object-fit: contain;
	width: 400px;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`

const First = styled.div`
display: flex;
flex-direction: column;
h1{
  color: white;
}
p{
  color: white;
}
`

const Hero = styled.div`
display: flex;
/* width: 80%; */
	justify-content: space-around;
	align-items: center;
	padding-bottom: 40px;
  /* background-color: aliceblue; */
  /* margin: 20px  ; */
`


const Button = styled.button`
height: 30px;
width: 80px;
background-color: white;
outline: none;
margin: 5px;
color: black;
border-radius: 50px;
cursor: pointer;
`

const ButtonHold = styled.div`
display: flex;
justify-content: center;
`

const NavHold = styled.div`
display: flex;
justify-content: center;
align-items: center;

a{
  margin-left: 15px;
	margin-right: 15px;
  color: white;
  text-decoration: none;
	cursor: pointer;
	:hover{
		color:  #123456;
	}
}
`

const Logo = styled.div`
height: 40px;
object-fit: contain;
width: 120px;
color: white;
cursor: pointer;
font-weight:bolder ;
	font-style:italic ;
	justify-content:center ;
	display:flex ;
	align-items:center ;
	font-size: 20px;
	cursor: pointer;
	border-radius: 10px;
	:hover{
		color: black;
	}
`

const Header = styled.div`
display: flex;
justify-content: space-around;
margin: 5px;
/* width: 80%; */
height: 50px;
`

const Wrapper = styled.div`
/* display: flex; */
/* justify-content: center; */
background-color: darkblue;
width:70%;
height: 70vh;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Container = styled.div`
background-color: whitesmoke;
display:flex ;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`