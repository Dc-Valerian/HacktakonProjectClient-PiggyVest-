import React from 'react'
import styled from 'styled-components'
import {TfiReload} from "react-icons/tfi"
import img1 from "../Assets/diamond.png"
import img2 from "../Assets/power.png"
import img3 from "../Assets/money.png"

const Cards = () => {
  return (
    <Container>
        <Top>
            <Icon><TfiReload /></Icon>
            <Button>+QUICK SAVE</Button>
        </Top>
        <Boxhold>
            <Card>
                <Image src={img1} />
                <Text>
                    <p>Total Savings</p>
                    <h2>₦0.00</h2>
                </Text>
            </Card>
            <Card2>
                <Image src={img2} />
                <Text>
                    <p>Total Investments</p>
                    <h2>₦0.00</h2>
                </Text>
            </Card2>
            <Card3>
                <Image src={img3} />
                <Text>
                    <p>Flex Dollar</p>
                    <h2>₦0.00</h2>
                </Text>
            </Card3>
        </Boxhold>
    </Container>
  )
}

export default Cards
const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        font-size: .875rem;
        opacity: .75;
        font-weight: 700;
        font-family: U8,sans-serif;
        color: #e0e0e0;
        margin: 0;
    }
    h2{
        color: #fff;
        font-size: 23px;
        margin: 0;
    }
`
const Image = styled.img`
    margin-left: 15px;
`
const Card3 = styled.div`
    width: 320px;
    height: 150px;
    background-color: #222222;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Card2 = styled.div`
    width: 320px;
    height: 150px;
    background-color: #7E1CE6;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Card = styled.div`
    width: 320px;
    height: 150px;
    background-color: #1666D9;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.div`
    font-size: 15px;
    color: #fff;
    text-align: center;
    width: 180px;
    height: 45px;
    display: flex;
    font-weight: 700;
    font-family: U8,sans-serif;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #0d60d8;
`
const Icon = styled.div`
    font-weight: bold;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`