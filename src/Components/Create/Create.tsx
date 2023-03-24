import React from "react";
import styled from "styled-components";
import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { UserLogin } from "../Global/ReduxState";
// import { useAppDispatch } from "../Global/Store";
// import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
// import { useQueryClient } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";
// import { UserSignUp } from "../APICALLS/API";
import accidentSignup from "../Assets/accidentSignup.png";
// import pic2 from "../Assets/sign6.jpg"
import wave from "../Assets/wave2.svg"
import pic from "../Assets/img8.jpeg"
import logo from "../Assets/logo7.png"

const Signup = () => {
  const navigate = useNavigate();

  // const dispatch = useAppDispatch();

  // const queryclient = useQueryClient();

  // Setting up the schemas for our form using yup validator
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password do not match"),
    phoneno: yup.number().required("Please enter your phone number"),
  });

  type formData = yup.InferType<typeof Schema>;

  // const {
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  //   register,
  // } = useForm<formData>({ resolver: yupResolver(Schema) });

  // //   To sign up users:
  // const UsersSignUp = useMutation({
  //   mutationKey: ["New Users"],
  //   mutationFn: UserSignUp,
  //   onSuccess: (data: any) => {
  //     dispatch(UserLogin(data.data));
  //   },
  // });

  // const SignedUpUser = handleSubmit((data: any) => {
  //   UsersSignUp.mutate(data);
  //   reset();
  //   navigate("/user-signin");
  //   Swal.fire({
  //     icon: "success",
  //     title: "User Sign Up Successful",
  //     //   text: UsersSignUp!.data!.message,
  //   });
  // });

  return (
    <>
      <Body>
          {/* <Right>
            <RightImg src={pic2} />
          </Right> */}
          <Left>
            <Form>
            <NavLink to="/" style={{textDecoration:"none"}}>
              <Image>
              <Img src={logo}/>
              </Image>
            </NavLink>

              <Input
                type="text"
                placeholder="Full Name"
                // {...register("name")}
                // props={errors?.name ? "outline" : ""}
              />
              {/* <p>{errors?.name && errors?.name?.message}</p> */}

              <Input
                type="text"
                // props={errors?.email ? "outline" : ""}
                placeholder="Email"
                // {...register("email")}
              />
              {/* <p>{errors?.email && errors?.email?.message}</p> */}

              <Input
                // props={errors?.password ? "outline" : ""}
                type="password"
                placeholder="Password"
                // {...register("password")}
              />
              {/* <p>{errors?.password && errors?.password?.message}</p> */}

              <Input
                // props={errors?.confirmPassword ? "outline" : ""}
                type="text"
                placeholder="Confirm Password"
                // {...register("confirmPassword")}
              />
              <p>
                {/* {errors?.confirmPassword && errors?.confirmPassword?.message} */}
              </p>

              <Button type="submit">Sign Up</Button>

                <NavLink to="/login" style={{textDecoration:"none"}}>
              <Already>Already have an account?
                Sign in
              </Already>
                </NavLink>
            </Form>
          </Left>
      </Body>
    </>
  );
};

export default Signup;
const Image = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

const Img = styled.img`
width: 40%;
object-fit: cover;

`

const Text = styled.div`
font-size: 20px;
color:#031e3b;
font-weight: 700;
margin-bottom: 20px;
text-align: center;
`

// const Body = styled.div``;

// const Body = styled.div``;

const RightImg = styled.img`
  width: 500px;
  color: #031e3b;
  border-radius: 30px;
`;

const Right = styled.div`
  width: 50%;
  /* background-color: red; */

  @media screen and (max-width: 770px) {
    width: 100%;
    display: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    display: none;
  }
`;

// const Body = styled.div``;

const Already = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: #031e3b;
  margin-top: 15px;
  text-align: center;
`;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background: #031e3b;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: #031e3b;
  }
`;

const Input = styled.input`
  // <{ props: string }>
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #031e3b;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;
  outline: none;
`;

const Form = styled.form`
  width: 270px;
  /* background-color: #ffff; */
  height: 400px;
  box-shadow: 0 0 3px #031e3b;
  background-color: white;


  border-radius: 20px 0 20px 0;
  padding: 30px;
  padding-right: 40px;
  margin-top: 40px;

  
  
  
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);


  @media screen and (max-width: 770px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;





const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${pic});
 

  /* ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: -100;
    bottom: 0;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: cover;
  } */
  // background-size: cover;
`;
