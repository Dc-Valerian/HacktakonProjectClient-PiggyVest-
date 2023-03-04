import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo-white.svg"
import { Link, useNavigate } from 'react-router-dom'
import green from "../../Assets/green.png"
import pink from "../../Assets/pink.png"
import purple from "../../Assets/purple.png"
import blue from "../../Assets/blue.png"
import { User } from '../../Global/ReduxState'
import axios from 'axios'
import { UseAppDispatch } from '../../Global/Store'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../../ApiCalls/ApiCall'


const localUrl = "http://localhost:6400";

const Register = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const schema = yup.object({
    name:yup.string().required("Name is a Required Field"),
    email:yup.string().required("Please Enter Your Valid Email Address").email(),
    userName:yup.string().required("This is a required Field"),
    phoneNumber:yup.number().required("Field Must be required"),
    password:yup.string().min(5).required("Please enter a password"),
    confirmpassword:yup.string().oneOf([yup.ref("password")]).required(),
  }).required()

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState:{errors},
    reset,
    register,
  }=useForm<formData>({
    resolver:yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey:["created"],
    mutationFn:createUser,

    onSuccess:(myData)=>{
      dispatch(User(myData.data));
      navigate("/dashboard")
    }
  });

  const Submit = handleSubmit(async(data)=>{
    posting.mutate(data);
  })
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
       <Input {...register("name")} type="text"  placeholder='Full Name'/>
       <p>{errors?.name && errors?.name?.message}</p>
       </FormList>
       <FormList>
       <h5>userName</h5>
       <Input {...register("userName")} type="text"  placeholder='userName'/>
       <p>
        {errors?.userName && errors?.userName?.message}
       </p>
       </FormList>
       <FormList>
       <h5>Email Address</h5>
       <Input {...register("email")} type="text"  placeholder='Put in Your Valid Email Address'/>
       <p>
        {errors?.email && errors?.email?.message}
       </p>
       </FormList>
       <FormList>
       <h5>Phone Number</h5>
       <Input {...register("phoneNumber")} type="text"  placeholder='Input Your Phone Number'/>
       <p>
        {
          errors?.phoneNumber && errors?.phoneNumber?.message
        }
       </p>
       </FormList>
       <FormList>
       <h5>Password</h5>
       <Input {...register("password")} type="password"  placeholder='Enter Your Password' />
       <p>
        {
          errors?.password && errors?.password?.message
        }
       </p>
       </FormList>
       <FormList>
       <h5>Confirm Passwords</h5>
       <Input {...register("confirmpassword")} type="text"  placeholder='Please Confirm Your Password'/>
       <p>
        {
          errors?.confirmpassword && errors?.confirmpassword?.message
        }
       </p>
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
      {/* <Butt to="/dashboard"> */}
      <Button type='submit'>
        Create Account
       </Button>
      {/* </Butt> */}
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
const Butt = styled(Link)`
  
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