import React, { useState } from "react";
import {
  CardBox,
  Container,
  CardDetail,
  CardNumber,
  CardTitle,
  CardOverlay,
  CardContainer,
  CardDetailOverlay,
  MockDate,
  PickDate,
} from "./style";

const Card: React.FC = (): JSX.Element => {
  const [state, setstate] = useState({
    IsClicked: false,
  });
  const HandleOverLay = () => {
    setstate({ ...state, IsClicked: !state.IsClicked });
  };
  return (
    <Container>
      <CardOverlay onClick={() => HandleOverLay()} OnShow={state.IsClicked}>
        <span>&#43;</span>
      </CardOverlay>
      <CardContainer OnShow={state.IsClicked}>
        <CardDetailOverlay OnShow={state.IsClicked}>
          <h2>CREATE BOOST</h2>
          <h3>Data Period</h3>
          <h2>Pick Date Range:</h2>
          <PickDate>
            <MockDate>2020-8-8</MockDate>
            TO
            <MockDate>2020-8-8</MockDate>
          </PickDate>
        </CardDetailOverlay>
        <CardBox>Boost</CardBox>
        <CardDetail>
          <CardTitle>LIKING</CardTitle>
          <CardNumber>100</CardNumber>
        </CardDetail>
      </CardContainer>
    </Container>
  );
};

export default Card;
