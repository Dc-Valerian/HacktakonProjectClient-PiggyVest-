import React from 'react'
import styled from 'styled-components'

const Customers = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <ChatHold>
              {/* <Chats/> */}
            </ChatHold>
          </First>
          <Second>
            <span>
            4 Million + customers
            </span>
            <p>
            Since launching in 2016, over 4,000,000 people 
            <br />
             have used PiggyVest to manage their money better, avoid 
             <br />
              over-spending and be more accountable.
            </p>
            <Button>
              Create Fee Account
            </Button>
            <ButtonHold>
              <Buttons></Buttons>
            </ButtonHold>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Customers;
const ChatHold = styled.div`
width: 100%;
height: 100%;
position: absolute;
transition: all 500ms;
`

const Buttons = styled.button``

const ButtonHold = styled.div``

const Button = styled.button``

const Second = styled.div``

const First = styled.div`
display: flex;
width: 50%;
height: 100%;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 100%;
background-color: aliceblue;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
background-color: blueviolet;
`