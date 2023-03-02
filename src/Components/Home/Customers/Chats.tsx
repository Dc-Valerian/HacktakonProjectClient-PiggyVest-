import React from 'react'
import styled from 'styled-components';


interface props{
    date:string;
    name:string;
    image:string;
    message:string;
}

const Chats:React.FC<props> = ({date,name,message,image}) => {
  return (
    <div>
        <Container>
        <Date>{date}</Date>
        <Wrapper>
            <Image src={image}/>
            <Card>
                <Name>
                    {name}
                </Name>
                <Message>
                    {message}
                </Message>
            </Card>
        </Wrapper>
        </Container>
    </div>
  )
}

export default Chats
const Message = styled.div`
margin: 0;
font-size: 13px;
letter-spacing: 1px;
max-width: 400px;
`

const Name = styled.div`
font-size: 15px;
`

const Card = styled.div`
overflow: hidden;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
`

const Image = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
border-radius: 50%;
`

const Date = styled.div`
color: whitesmoke;
font-size: 15px;
text-align: right;
margin-right: 25px;
`

const Container = styled.div`
display: flex;
justify-content: center;
width: 450px;
flex-direction: column;
border-radius: 5px;
height: 200px;
margin: 10px;
background-color: #F9F9F9;
`