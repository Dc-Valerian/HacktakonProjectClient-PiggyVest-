import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <Img/>
          </Logo>

          <NavLink >
            <Nav to="">Save</Nav>
            <Nav to ="">Invest</Nav>
            <Nav to ="">Stories</Nav>
            <Nav to="">FAQs</Nav>
            <Nav to ="">Blog</Nav>
            <Nav to="">E-Book</Nav>
          </NavLink>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header

const Nav = styled(Link)``

const NavLink = styled.div``

const Img = styled.img``

const Logo = styled.div``

const Wrapper = styled.div``

const Container = styled.div``
