import React from 'react'
import styled from 'styled-components'
import SideBar from '../DashBoard/SideBar'
import Invest from './Invest'

const Investdashboard = () => {
  return (
    <div>
       <Container>
       <SideBar />
        <Invest />
       </Container>
    </div>
  )
}

export default Investdashboard

const Container = styled.div`
  display: flex;
`;