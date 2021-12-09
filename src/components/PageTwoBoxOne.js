import React from 'react';

import TituloPerguntaMini from "./TituloPerguntaMini";
import TituloPerguntaGrande from "./TituloPerguntaGrande";
import PageTwoButtons from "./PageTwoButtons";
import Resposta from "./Resposta";
import ContadorPerguntas from "./ContadorPerguntas";
import PageTwoTurn from "./PageTwoTurn";

export default function PageTwoBoxOne(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    const [itemsNum, setitemsNum] = React.useState(1);
    const [whichAnswer, setwhichAnswer] = React.useState(0);
    const [whichQuestion, setwhichQuestion] = React.useState(0);
    const [hideBig, sethideBig] = React.useState(false);
    const [hideTurn, sethideTurn] = React.useState(false);
    const [hideButtons, sethideButtons] = React.useState(true);
    const [hideMini, sethideMini] = React.useState(true);
    const [putColor, setputColor] = React.useState(false);

    const [i, seti] = React.useState(0);

    const itemsPerguntas = ["Pergunta1", "Pergunta2", "Pergunta3", "Pergunta4", "Pergunta5", "Pergunta6", "Pergunta7", "Pergunta8"];
    const itemsRespostas = ["Resposta1", "Resposta2", "Resposta3", "Resposta4", "Resposta5", "Resposta6", "Resposta7", "Resposta8"];

    
    function increment(){
        setputColor("");
        if(i==1){
            seti(0);
            setwhichQuestion(whichQuestion+1);
            setwhichAnswer(whichAnswer+1);
            setitemsNum(itemsNum+1);
            if (hideBig){
                sethideBig(false);
            }   
            else{
                sethideBig(true);
            }
            if (hideMini){
                sethideMini(false);
            }   
            else{
                sethideMini(true);
            }
        }
        else{
            if (hideBig){
                sethideBig(false);
            }   
            else{
                sethideBig(true);
            }
            if (hideMini){
                sethideMini(false);
            }   
            else{
                sethideMini(true);
            }
            if (hideTurn){
                sethideTurn(false);
            }   
            else{
                sethideTurn(true);
            }   
            if (hideButtons){
                sethideButtons(false);
            }   
            else{
                sethideButtons(true);
            }
        }
    }

    function buttonRight(cor){
        seti(1);
        if(cor == 1){
            setputColor("black");
        }
        else if(cor == 3){
            setputColor("green");
        }
        else{
            setputColor("yellow");
        }
        if(itemsNum == 8){
            (props.funcaoResult)();
        }
        if (hideTurn){
            sethideTurn(false);
        }   
        else{
            sethideTurn(true);
        }   
        if (hideButtons){
            sethideButtons(false);
        }   
        else{
            sethideButtons(true);
        }
    }

    function buttonWrong(cor){
        seti(1);
        setputColor("red");
        if(itemsNum == 8){
            (props.funcaoResult)();
        }
        (props.funcao)();
        if (hideTurn){
            sethideTurn(false);
        }   
        else{
            sethideTurn(true);
        }  
        if (hideButtons){
            sethideButtons(false);
        }   
        else{
            sethideButtons(true);
        } 
    }

    return (
        <div class = {`${setHide} ${putColor} page2-box1 flex`}>
            <div class = "page2-num">
                <TituloPerguntaMini question = {itemsPerguntas[whichQuestion]} hide = {hideMini}/>
                <ContadorPerguntas question = {itemsNum} />
            </div>
            <div class = "page2-answer">
                <TituloPerguntaGrande question = {itemsPerguntas[whichQuestion]} hide = {hideBig}/>
                <Resposta resposta = {itemsRespostas[whichAnswer]} hide = {hideMini}/>
            </div>
            <div class = "page2-turn">
                <PageTwoTurn funcao = {increment} hide = {hideTurn} />
                <PageTwoButtons funcaoAcerto = {buttonRight} funcaoErro = {buttonWrong} hide = {hideButtons} />
            </div>
        </div>
    );
}