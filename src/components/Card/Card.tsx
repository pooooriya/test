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

interface CardProps {
  name: string;
  lable: string;
  picklable: string;
  firstDate: string;
  SecondDate: string;
  secondLable: string;
  Num: number;
  finalLable: string;
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
  const [state, setstate] = useState({
    IsShow: false,
  });
  const ref = useRef(null);
  const HandleOverLay = useCallback(() => {
    setstate({ ...state, IsShow: !state.IsShow });
  }, [state]);
  const HandleCloseOverLay = useCallback(() => {
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
        <h2>{props.name}</h2>
        <h3>{props.lable}</h3>
        <h2>{props.picklable}</h2>
        <PickDate>
          <MockDate>{props.firstDate}</MockDate>
          TO
          <MockDate>{props.SecondDate}</MockDate>
        </PickDate>
      </CardDetailOverlay>
      <CardContainer>
        <CardBox>{props.secondLable}</CardBox>
        <CardDetail>
          <CardTitle>{props.finalLable}</CardTitle>
          <CardNumber>{props.Num}</CardNumber>
        </CardDetail>
      </CardContainer>
    </Container>
  );
};

export default Card;
