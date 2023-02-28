import React from 'react'
import styled from 'styled-components'

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
              <Button>
                Get on IPhone
              </Button>
              <Button>
                Get on Android
              </Button>
            </ButtonHold>
          </First>
          <Second>
            <Img/>
            Image
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Button = styled.button``

const ButtonHold = styled.div``

const Sub = styled.div``

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