import ReactDOM from "react-dom";
import React from 'react';

import PageTwoBoxOne from "./components/PageTwoBoxOne";
import PageTwoBoxTwo from "./components/PageTwoBoxTwo";
import PaginaInicial from "./components/PaginaInicial";

function App() {
  const [isHidePage1, setisHidePage1] = React.useState("");
  const [isHidePage2, setisHidePage2] = React.useState("hide");
  const [isHideBoxOne, setisHideBoxOne] = React.useState(false);
  const [isHideBoxTwo, setisHideBoxTwo] = React.useState(true);
  const [qtdMistakes, setiqtdMistakes] = React.useState(0);

  function hide(){
    setisHidePage1("hide");
    setisHidePage2("");
  }

  function wrongOrRight(){
    setiqtdMistakes(1);
  }

  function result(){
    setisHideBoxOne(true);
    setisHideBoxTwo(false);
  }

  return (
    <>
      <div class = {` ${isHidePage1} page1 flex`}>
          <img id = "page1-logo" src = "img/logo.png" />
          <PaginaInicial funcao = {hide} />
      </div>
      
      <div  class = {` ${isHidePage2} page2`}>
          <header class = "header">
              <img src = "img/logo-mini.png" />
          </header>
          <PageTwoBoxOne funcao = {wrongOrRight} funcaoResult = {result} hide = {isHideBoxOne} />
          <PageTwoBoxTwo erros = {qtdMistakes} hide = {isHideBoxTwo} />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));