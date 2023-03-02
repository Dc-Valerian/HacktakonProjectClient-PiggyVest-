import React from 'react'
import styled from 'styled-components'
import Chats from './Chats';
import lonely from "../../Assets/lonely.jpg"
import slider1 from "../../Assets/slider1.jpg"
import shazam from "../../Assets/shazam.jpg"
import me from "../../Assets/me.jpeg"

const Customers = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <ChatHold>
              <Chats
              date='Thursday, 2nd of March 2023 by 1:29 PM'
              image={me}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Dc Valerian'
              />
              <Chats
              date='Thursday, 2nd of March 2023 by 1:29 PM'
              image={slider1}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Dc Valerian'
              />
              <Chats
              date='Thursday, 2nd of March 2023 by 1:29 PM'
              image={shazam}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Dc Valerian'
              />
              <Chats
              date='Thursday, 2nd of March 2023 by 1:29 PM'
              image={lonely}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Dc Valerian'
              />
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
animation: MoveUpDown 15s linear infinite;

@keyframes MoveUpDown {
  from{
    bottom: 60px;
  }
  to{
    bottom: 400px;
  }
}
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