import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{padding:0;margin:0;box-sizing:border-box;}
#root{
     width: 100%;
     display: flex;
}
body{
    padding-top: 100px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
@media (min-width: 576px) {
        width: 540px;
}
@media (min-width: 768px) {
        width: 720px;
}
@media (min-width: 992px) {
        width: 960px;
}
@media (min-width: 1200px) {
        width: 1140px;
}
}
`;

export default GlobalStyle;
