import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo-white.svg"
// import { Link } from 'react-router-dom'
import green from "../../Assets/green.png"
import pink from "../../Assets/pink.png"
import purple from "../../Assets/purple.png"
import blue from "../../Assets/blue.png"


const Register = () => {
  return (
    <div >
      <Container>
        <Wrapper>
          <Logo >
            <Img src={logo}/>
          </Logo>

          <FormHold>
            <Wrap>
            <Title>
         Create a Secure Account
         </Title>
         <Sub>
         Welcome to the future of Savings & Investments
         </Sub>
       <Form>
        <h4>Full Name</h4>
       <input type="text"  placeholder='Full Name'/>
       </Form>
            </Wrap>
          </FormHold>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
const Wrap = styled.div``

const Form = styled.div`
display: flex;
flex-direction: column;
background-color: aliceblue;
height: 80px;
margin: 10px;
justify-content: center;
align-items: center;
`

const Sub = styled.div``

const Title = styled.div``

const FormHold = styled.div`
background-color: white;
width: 500px;
margin-bottom: 20px;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
`

const Img = styled.img``

const Logo = styled.div`
cursor: pointer;
margin-top: 20px;
margin: 30px;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #062863;
width: 100%;
padding: 10px 0px 10px 0px;
background-image: url(${blue}),url(${green}),url(${purple});
background-repeat: no-repeat;
background-size: 15%;
background-position: left -1% top -15%, right -7.5%;
`