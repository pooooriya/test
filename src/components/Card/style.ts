import styled, { keyframes } from "styled-components";

type OverLay = {
  OnShow: boolean;
};

export const CardContainer = styled.div<OverLay>`
  height: 100%;
  border-radius: 10px;
  border: 2px solid #eaeaea;
  position: relative;
  background-color: #fff;
  ${(p) => p.OnShow && `border-color: transparent;`}
  margin:0 10px;
`;

export const CardOverlay = styled.div<OverLay>`
  user-select: none;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -8px);
  width: 90%;
  height: 50px;
  background-color: red;
  z-index: -10;
  background-color: #fff;
  border: 2px solid #eaeaea;
  transition: transform ease 0.5s;
  text-align: center;
  cursor: pointer;
  span {
    color: blue;
    font-size: 50px;
    font-weight: bold;
    line-height: 0.5;
  }
  ${(p) =>
    p.OnShow &&
    `
    transform: translate(-50%, -35px);
    background-color:blue;
   span {
    color: white;
  }
  `}
`;

export const CardBox = styled.div`
  position: absolute;
  border-radius: 60px;
  border: 4px solid #eaeaea;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  color: #a6acba;
`;

export const CardDetail = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  padding: 35px 20px;
`;
export const CardTitle = styled.div`
  width: inherit;
`;
export const CardNumber = styled.div`
  width: inherit;
  text-align: right;
  font-weight: bold;
  font-size: 25px;
`;

export const Container = styled.div`
  width: 250px;
  height: 150px;
  position: relative;
  z-index: 0;
  &:hover ${CardOverlay} {
    transform: translate(-50%, -35px);
  }
`;

export const animationfade = keyframes`
0{
  opacity: 0;
}

50{
  opacity: .5;
}

100{
  opacity: 1;
}
`;

export const CardDetailOverlay = styled.div<OverLay>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: red;
  height: 200px;
  width: 100%;
  top: 0px;
  z-index: 10;
  border-radius: 10px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s linear;
  background: #fff;
  text-align: center;
  h2 {
    font-size: 12px;
    font-weight: 400;
    margin: 10px 0;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #a6acba;
    &::after {
      border-bottom: 1px dashed black;
      content: "";
      flex: 1;
      margin: 0 10px;
    }
    &::before {
      border-bottom: 1px dashed black;
      content: "";
      flex: 1;
      margin: 0 10px;
    }
  }
  ${(p) =>
    p.OnShow &&
    `
    visibility: visible;
    opacity: 1;
    border: 2px solid #eaeaea;
  `}
`;

export const MockDate = styled.div`
  text-decoration: underline;
  width: 100%;
`;

export const PickDate = styled.div`
  display: flex;
  text-align: center;
`;
