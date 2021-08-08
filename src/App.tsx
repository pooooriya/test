import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./style/global";
import HomePage from "./pages";
function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
