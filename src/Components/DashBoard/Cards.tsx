import React from 'react'
import styled from 'styled-components'
import {TfiReload} from "react-icons/tfi"
import img1 from "../Assets/diamond.png"
import img2 from "../Assets/power.png"
import img3 from "../Assets/money.png"
import {CiCircleRemove} from "react-icons/ci"
import { useAppSelector } from '../Global/Store'
import * as yup from "yup"
import { type } from 'os'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { TransferMoney } from '../ApiCalls/ApiCall'
import Swal from 'sweetalert2'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'

const localUrl = "http://localhost:6400"

const Cards = () => {
    const user = useAppSelector((state)=>state.currentUser)
    const [show,setShow]  = React.useState(false)
    const [cancle,setCancle] = React.useState(false)

    const schema = yup.object({
        accountNumber:yup.number().required("field must be filled"),
        amount:yup.number().required("field must be filled"),
    }).required();

    type formData = yup.InferType<typeof schema>;

    const {
        handleSubmit,
        formState:{errors},
        reset,
        register,
    } = useForm<formData>({
        resolver:yupResolver(schema)
    })

    const Cancel =()=>{
        setShow(false)
    }
    const Toggle =()=>{
        setShow(!false)
    }

    const posting = useMutation({
        mutationFn:(data)=>{
            return TransferMoney(data,user?._id)
        },
        onSuccess:(data)=>{
            Swal.fire({
                title:"Transfer Success",
                icon:"success"
            })
        }
    })

    const onSubmit = handleSubmit(async(data)=>{
        await axios.post(`${localUrl}/api/user/sendmoney/${user?._id}/${user?._id}`,data).then((res)=>{
            Swal.fire({
                title:"Successfully Sent",
                icon:"success"
            });
        }).catch((err)=>{
            Swal.fire({
                title:"An Error Occurred",
                icon:"error",
                text:`${err.response?.data?.message}`,
            })
            console.log(err);
        })
    })

  return (
    <Container>
        <Top>
            <Icon
            onClick={()=>{
                window.location.reload()
            }}
            ><TfiReload /></Icon>
            <Button 
            onClick={Toggle}
            >+QUICK SAVE</Button>
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

      
      {
        show ?(
            <Save>
                <Holder >
                        <Icons onClick={Cancel}>
                            <AiOutlineClose/>
                        </Icons>
                        <Quick>
                            <h3>Send Money</h3>
                            <p>Enter an amount and the Account Number you want to send</p>
                        </Quick>
                        <Tap>
                            <p>Tap here & enter ...(e.g 5000)</p>
                            <Input
                            type="number"
                            {...register("amount")}
                            placeholder="Tap here & enter..(e.g 5000)"
                            />
                        </Tap>
                        <Tap2>
                            <p>
                                Enter Account Number
                            </p>
                            <Input2
                            type="number"
                            {...register("accountNumber")}
                            placeholder="Enter the Account Number"
                            />
                        </Tap2>
                        <Proceed
                        onClick={()=>{
                            onSubmit()
                        }}
                        >
                            Proceed
                        </Proceed>
                </Holder>
            </Save>
        ):null
      }
    </Container>
  )
}

export default Cards
const Proceed = styled.button`
font-size: 17px;
	color: #fff;
	text-align: center;
	cursor: pointer;
	font-weight: 700;
	font-family: U8, sans-serif;
	margin-top: 160px;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: #0d60d8;
	border: none;
	outline: none;
	width: 90%;
	height: 50px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`

const Tap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 55px;

p{
    color: #4a5568;
    font-weight: 700;
    font-family: U8,sans-serif;
    font-size: 15px;
}
`

const Tap2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 35px;

p{
    color: #4a5568;
    font-weight: 700;
    font-family: U8,sans-serif;
    font-size: 15px;
}
`

const Input = styled.input`
	width: 88%;
	height: 45px;
	color: #1d222b;
	background-color: #edf2f7;
	font-size: 100%;
	border: none;
	outline: none;
	padding-left: 15px;
	border-radius: 5px;
`

const Input2 = styled.input`
	width: 88%;
	height: 45px;
	color: #1d222b;
	background-color: #edf2f7;
	font-size: 100%;
	border: none;
	outline: none;
	padding-left: 15px;
	border-radius: 5px;
`

const Quick = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 100px;

p{
    color:#718096;
    margin: 0;
    font-size: 14px;
}
h3{
    font-size: 25px;
    margin: 0;
    color:#083e9e ;
    font-weight: 700;
    font-family: U8,sans-serif;
}
`

const Icons = styled.div`
  font-size: 30px;
	cursor: pointer;
	position: absolute;
	top: 15px;
	right: 15px;
`
const Holder = styled.div`
   	width: 27%;
	display: flex;
	height: 100%;
	background-color: #fff;
	flex-direction: column;
	align-items: center;
	padding-left: 35px;
`
const Save = styled.div`
  	width: 100%;
	height: 100vh;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.6);
	left: 0;
	top: 0;
	right: 0;
	position: fixed;
	display: flex;
	justify-content: flex-end;
	transition-timing-function: ease-in;
	transition: 1s;
`

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
    cursor: pointer;
`
const Icon = styled.div`
    font-weight: bold;
    cursor: pointer;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`