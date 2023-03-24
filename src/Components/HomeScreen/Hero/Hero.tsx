// import React from "react";
// import styled from "styled-components";
// import { AiOutlineSearch } from "react-icons/ai";
// import axios from "axios";
// import vid from "../../Assets/pexels-tima-miroshnichenko-7579941.mp4"

// interface MyData {
// 	_id: string;
// 	author: string;
// 	authorImage: string;
// 	category: string;
// 	coverImage: string;
// 	title: string;
// 	views: string[];
// }


// const Hero = () => {

	

// 	return (
// 		<Container>
// 			<Video
// 				// controls
// 				autoPlay
// 				loop
// 				playsInline
// 				muted
// 				src={vid}
// 			/>

// 			<Content>
		

// 				<h2>
// 					{" "}
//           Financial Security Assured <br />
            
// 				</h2>
// 				<p>
// 					{/* Millions of designers and agencies around the world showcase their
// 					portfolio work on Dribbble - the home to the world’s best design and
// 					creative professionals. */}
//             Watch.. grow.. be secured
// 				</p>

		
// 			</Content>
// 		</Container>
// 	);
// };

// export default Hero;

// const Input = styled.input`
// 	background-color: transparent;
// 	border: none;
// 	outline: none;
// 	flex: 1;
// `;

// const InputHold = styled.div`
// 	display: flex;
// 	align-items: center;
// 	height: 50px;
// 	width: 350px;
// 	background-color: white;
// 	color: black;
// 	border-radius: 25px;
// 	@media screen and (max-width: 500px) {
// 		width: 280px;
// 	}
// `;
// const Icon = styled.div`
// 	margin-left: 10px;
// 	margin-right: 10px;
// 	font-size: 20px;
// `;

// const ButtonHold = styled.div`
// 	margin-top: 50px;
// 	display: flex;
// 	overflow-x: scroll;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// 	::-webkit-scrollbar {
// 		width: 0;
// 	}
// 	@media screen and (max-width: 768px) {
// 		justify-content: flex-start;
// 		align-items: flex-start;
// 	}
// `;

// const Content = styled.div`
// 	position: absolute;
// 	height: 100%;
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	flex-direction: column;
// 	align-items: center;
// 	text-align: center;
// 	h2 {
// 		font-size: 40px;
// 		margin: 0;
// 		margin-top: 30px;
// 	}
// 	p {
// 		width: 700px;
// 		@media screen and (min-width: 330px) and (max-width: 600px) {
// 			width: 320px;
// 		}
// 		@media screen and (max-width: 320px) {
// 			width: 280px;
// 		}
// 	}
// `;

// const Video = styled.video`
// 	height: 80vh;
// 	width: 100%;
// 	object-fit: cover;
// `;
// const Container = styled.div`
// 	height: 500px;
// 	width: 100%;
// 	position: relative;
//   top: 50px;
// 	display: flex;
// 	justify-content: center;
// 	color: white;
// 	::before {
// 		content: "";
// 		background-color: rgba(0, 0, 0, 0.737);
// 		position: absolute;
// 		height: 80vh;
// 		width: 100%;
// 	}
// `;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import phone from "../../Assets/hero.jpg";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Right>
            <H3> Let's Start Alajo Savings Today!!</H3>
            <H1>
          A Smart Solution for Traditional Savings and Credit        
            </H1>
            {/* <P>
            Alajo makes saving easier.Made for traders, merchants, fast-growing businesses <br /> and anyone looking for a smarter and better way to save.
            </P> */}

            <Btn>
              <button>Get started Now</button>

              <Icons>
                <Text>Learn More</Text>
                {/* <Icon>
                  <AiOutlineRight />
                </Icon> */}
              </Icons>
            </Btn>
          </Right>
          <Left>
            <Img src={phone}/>
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Text = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: fit-content;
transition: all 500ms;
background-image: linear-gradient(
    transparent 0,
    transparent 70%,
    whitesmoke
);
background-position-x: left;
background-repeat: no-repeat;
background-size: 0 100%;
:hover{
    background-size: 100% 100%;
}
`;
const Icon = styled.div`
  margin-top: 3px;
  margin-left: 5px;
`;
const Icons = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 50%;
  /* margin-top: 30px; */
  padding: 20px;
  color: #fff;
  /* background-color: red; */

  h3 {
    margin: 0;
  }

  @media screen and (max-width: 770px) {
    width: 90%;
  }
`;

const H1 = styled.div`
  line-height: 1.1;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 200;


  /* span{
    text-align: center;
  margin-left: 80px;
  } */

  @media screen and (max-width: 350px) {
    font-weight: 500;
    font-size: 30px;
  }
`;
const H3 = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  font-weight: 700;
line-height: 74px;
color:white;
background-color: rgba(0,0,0,0);
font-size: 70px;
vertical-align: baseline;
text-align: start;
font-style: normal;
`;

const P = styled.div`
  margin: 0;
  margin-bottom: 10px;
`;

const Img = styled.img`
  height: 100%;
  width:100%;
  object-fit: cover;
  border-radius: 30px;
`

const Left = styled.div`
  /* margin-top: 30px; */
  width: 28%;

  margin-right: 60px;

  @media screen and (max-width: 770px) {
    width: 70%;
  }
 
`;

const Btn = styled.div`
  margin-top: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  button {
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #063971;
    margin-right: 20px;

    :hover {
      scale: 0.97;
      cursor: pointer;
      transition: all 350ms;
      background-color: #063971;
      border: 1px solid white;
      color: #fff;
    }
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  width: 100%;
  height:700px;
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
  background-color: #031e3b;
  border-bottom-right-radius: 300px;
  /* margin-top: 20px; */
`;
