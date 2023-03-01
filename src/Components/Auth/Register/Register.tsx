import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo-white.svg"
import { Link } from 'react-router-dom'
import green from "../../Assets/green.png"
import pink from "../../Assets/pink.png"
import purple from "../../Assets/purple.png"
import blue from "../../Assets/blue.png"


const Register = () => {
  return (
    <div>
      <Container id='register'>
        <Wrapper>
          <Logo to="/">
            <Img src={logo}/>
          </Logo>

          <FormHold>
            <Wrap>
            <h2>Create a Secure Account</h2>
            <p>Welcome to the future of Savings & Investments</p>
       <Form>
       <FormList>
       <h5>Full Name</h5>
       <Input type="text"  placeholder='Full Name'/>
       </FormList>
       <FormList>
       <h5>Email Address</h5>
       <Input type="text"  placeholder='Email Address'/>
       </FormList>
       <FormList>
       <h5>Phone Number</h5>
       <Input type="text"  placeholder='Phone Number'/>
       </FormList>
       <FormList>
       <h5>Password</h5>
       <Input type="password"  placeholder='Password' />
       </FormList>
       <FormList>
       <h5>Referrer Phone or Promo Code(Optional)</h5>
       <Input type="text"  placeholder='Referrer Phone or Promo Code'/>
       </FormList>
       <FormList>
        <h5>How Did You Hear About Us?(Optional)</h5>
        <select>
          <option>Click to Select</option>
          <option>Valerian Pedro</option>
          <option>Twitter</option>
          <option>Instagram</option>
          <option>Friends/Family/Co Worker</option>
          <option>Google Search</option>
          <option>Google PlayStore</option>
          <option>Online Blog</option>
          <option>Local Newspaper</option>
          <option>At an Event</option>
          <option>others</option>
        </select>
       </FormList>
       <Button>
        Create Account
       </Button>
       </Form>
            </Wrap>
          </FormHold>
          <Login to ="/login">
            Already have an Account? Log In
          </Login>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
const Login = styled(Link)`
cursor: pointer;
margin-top: 20px;
color: white;
text-decoration: none;
`

const Button = styled.button`
background-color:#062B6F;
cursor: pointer;
width: 450px;
height:60px;
border-radius: 20px 10px 10px 0px;
outline: none;
border: none;
color: white;
margin-top: 50px;
font-size: 18px;
font-weight: bold;

`

const Wrap = styled.div`
width: 450px;
padding: 10px 0px 10px 10px ;
text-align: center;
margin-top: 50px;
margin-bottom: 30px;

h2{
  margin: 0;
  color: #083EB6;
}
p{
  margin: 0;
  color: grey;
}
`
const FormList = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0px 10px 0px;

h5{
  margin: 0;
  margin-bottom: 5px;
  text-align: start;
  color:gray;

}

select{
  width: 400px;
  height: 50px;
  background-color:#EDF2F7;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 20px;
}

`

const Input = styled.input`
width: 430px;
height: 50px;
background-color:#EDF2F7;
border-radius: 5px;
border: none;
outline: none;
padding-left: 15px;
`

const Form = styled.form`
margin-top: 30px;
`



const FormHold = styled.div`
background-color: white;
width: 500px;
margin-bottom: 30px;
padding: 10px 0px 20px 0px;
    background-color: white;
    border-radius: 20px 20px 20px 0px;
    display: flex;
    justify-content: center;
`

const Img = styled.img``

const Logo = styled(Link)`
cursor: pointer;
margin-top: 20px;
margin: 30px;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 40%;
padding: 20px 0px 30px 0px;

`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #062863;
width: 100%;
padding: 10px 0px 10px 0px;
background-image: url(${blue}),url(${green}),url(${purple}), url(${pink});
background-repeat: no-repeat;
background-size: 15%;
background-position: left -1% top -15%, right -7.5% top -1%, right -5% bottom -5% , left -8% bottom -5%;
position: sticky;
top: 0;
`