import React from 'react'
import styled from 'styled-components'
import one from "../Assets/one.png"
import two from "../Assets/two.png"
import three from "../Assets/three.png"
import four from "../Assets/four.png"

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Title>
            The Better Way  <br /> to Save & Invest.
            </Title>
            <Sub>
            PiggyVest helps over 4 million customers achieve their financial
            <br />
             goals by helping them save and invest with ease.
            </Sub>
            <Button>
              Create Free Account
            </Button>
            <ButtonHold>
              <Buttons>
                Get on IPhone
              </Buttons>
              <Buttons>
                Get on Android
              </Buttons>
            </ButtonHold>
          </First>
          <Second>
           <One src={one}/>
           <Two src={two}/>
           <Three src={three}/>
           <Four src={four}/>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero
const Four = styled.img``

const Three = styled.img``

const Two = styled.img``

const One = styled.img``
const Buttons = styled.div`
margin: 5px;
height: 50px;
width:220px ;
background-color: black;
color: white;
justify-content: center;
align-items: center;
display: flex;
`

const Button = styled.button`
margin: 5px;
height: 50px;
width:220px ;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
outline: none;
border: none;
font-size: 20px;
font-weight:500;
cursor: pointer;
transition: all 400ms;
border: 1px solid black;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

:hover{
  background-color: #0D5ED4;
  border: 1px solid blue;
  color: white;
  transform: scale(0.98);
}
`

const ButtonHold = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Sub = styled.div`
color: #5A3535;

`

const Img = styled.img``

const Title = styled.div`
font-size: 60px;
font-weight: bolder;
`

const Second = styled.div``

const First = styled.div`
display: flex;
flex-direction: column;
`

const Wrapper = styled.div`
background-color: navajowhite;
display: flex;
align-items: center;
justify-content: space-around;
width:80% ;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: red;
`