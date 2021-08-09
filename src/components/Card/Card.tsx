import React, { useCallback, useRef, useState } from "react";
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
  CardDetailBtn,
} from "./style";

const Card: React.FC = (): JSX.Element => {
  const [state, setstate] = useState({
    IsShow: false,
  });
  const ref = useRef(null);
  const HandleOverLay = useCallback(() => {
    setstate({ ...state, IsShow: !state.IsShow });
  }, [state]);
  const HandleCloseOverLay = useCallback(() => {
    console.log("hell");
    setstate({ ...state, IsShow: false });
  }, [state]);

  return (
    <Container
      OnShow={state.IsShow}
      tabIndex={0}
      onBlur={HandleCloseOverLay}
      ref={ref}
    >
      <CardOverlay onClick={HandleOverLay} OnShow={state.IsShow}>
        <span>&#43;</span>
      </CardOverlay>
      <CardDetailOverlay OnShow={state.IsShow}>
        <CardDetailBtn onClick={HandleOverLay}>
          <div>&#43;</div>
        </CardDetailBtn>
        <h2>CREATE BOOST</h2>
        <h3>Data Period</h3>
        <h2>Pick Date Range:</h2>
        <PickDate>
          <MockDate>2020-8-8</MockDate>
          TO
          <MockDate>2020-8-8</MockDate>
        </PickDate>
      </CardDetailOverlay>
      <CardContainer>
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
