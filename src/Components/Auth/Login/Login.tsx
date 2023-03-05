import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo-white.svg"
import { Link } from 'react-router-dom'
import green from "../../Assets/green.png"
import pink from "../../Assets/pink.png"
import purple from "../../Assets/purple.png"
import blue from "../../Assets/blue.png"
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { NavLink } from 'react-router-dom'


const Register = () => {
  const schema = yup.object({
    email:yup.string().email().required("Email Field must be required"),
    password:yup.string().min(9).required()
  }).required();

  type formData = yup.InferType<typeof schema>

  const{handleSubmit ,formState:{errors},reset,register} = useForm<formData>({
    resolver:yupResolver(schema)
  })

  const Submit = handleSubmit(()=>{
    reset()
  })

  return (
    <div >
      <Container >
        <Wrapper>
          <Logo to="/">
            <Img src={logo}/>
          </Logo>

          <FormHold>
            <Wrap>
            <h2>Login to Your Account</h2>
            <p>Securely login to your PiggyVest</p>
       <Form onSubmit={Submit}>
       <FormList>
       <h5>Email Address</h5>
       <Input {...register("email")} type="text"  placeholder='Email Address'/>
       <p>
        {
          errors?.email && errors?.email?.message
        }
       </p>
       </FormList>
       <FormList>
       <h5>Password</h5>
       <Input {...register("password")} type="password"  placeholder='Please Enter the valid registered number'/>
       <p>
        {
          errors?.password && errors?.password?.message
        }
       </p>
       </FormList>
       {/* <Butt to="/dashboard"> */}
     <NavLink to="/dashboard">
     <Button type='submit'>
        Log IN
       </Button>
     </NavLink>
       {/* </Butt> */}
       </Form>
            </Wrap>
          </FormHold>
        <NavLink to="/register" style={{textDecoration:"none"}}>
        <Login>
            Don't Have an account? Register!
          </Login>
        </NavLink>
          <Login>
            Forgot Password?
          </Login>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
const Login = styled.div`
cursor: pointer;
margin-top: 20px;
color: white;
text-decoration: none;
`
const Butt = styled(Link)``

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
height: 100%;
padding: 10px 0px 10px 0px;
background-image: url(${blue}),url(${green}),url(${purple}), url(${pink});
background-repeat: no-repeat;
background-size: 15%;
background-position: left -1% top -15%, right -7.5% top -6%, right -5% bottom -5% , left -8% bottom -5%;

`