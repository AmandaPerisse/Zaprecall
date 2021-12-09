import ReactDOM from "react-dom";
import React from 'react';

import PageTwoBoxOne from "./components/PageTwoBoxOne";
import PageTwoBoxTwo from "./components/PageTwoBoxTwo";

function App() {
  const [isHideT, setIsHideT] = React.useState("");
  const [isHideF, setIsHideF] = React.useState("hide");

  function hide(){
    setIsHideT("hide");
    setIsHideF("");
  }

  return (
    <>
        <div class = {` ${isHideT} page1 flex`}>
            <img id = "page1-logo" src = "img/logo.png" />
            <button onClick = {() => hide()} class = "page1-button flex">
                <h4>
                    Praticar React
                </h4>
                <img src = "img/next.png" />
            </button>
        </div>
        
        <div  class = {` ${isHideF} page2`}>
            <header class = "header">
                <img src = "img/logo-mini.png" />
            </header>
            <PageTwoBoxOne />
            <PageTwoBoxTwo />
        </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));