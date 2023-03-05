import React from "react";
import styled from "styled-components";

interface props {
  h1: string;
  p: string;
  icn: string;
  naira: string;
  bg: string;
}

const CardProps: React.FC<props> = ({ h1, p, icn, naira, bg }) => {
  return (
    <div>
      <Container>
        <Card bg={bg}>
          <Icn>{icn} </Icn>
          <h4>{h1} </h4>
          <p>{p}</p>
          <Naira>{naira} </Naira>
        </Card>
      </Container>
    </div>
  );
};

export default CardProps;

const Naira = styled.div``;

const Icn = styled.div``;

const Card = styled.div<{ bg: string }>`
  width: 300px;
  padding: 20px;
  padding-top: 10px;
  height: 200px;
  background-color: ${(props) => props.bg};
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Container = styled.div``;
