import React from 'react'
import styled from 'styled-components'
import {FaGreaterThan} from "react-icons/fa"
import img from "../Assets/security.png"

const Priority = () => {
  return (
    <div>
    <Container>
     <Wrapper>
     <Image src={img}/>
 <Second>
   <h2>Your security is our priority</h2>
   <h5>
   PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security
   <br />
    encryption to ensure that your information is comepletely protected from fraud.
   </h5>
   <Learn>
    <a href="/"> Learn More</a>
     <Icon>
       <FaGreaterThan/>
     </Icon>
   </Learn>
 </Second>
     </Wrapper>
    </Container>
    </div>
  )
}

export default Priority

const Icon = styled.div``

const Learn = styled.div``

const Second = styled.div``

const Image = styled.img``

const Wrapper = styled.div``

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`