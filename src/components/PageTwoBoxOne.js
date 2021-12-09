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
    const [hideMini, sethideMini] = React.useState(true);
    const [temErro, settemErro] = React.useState(false);

    const itemsPerguntas = ["Pergunta1", "Pergunta2", "Pergunta3", "Pergunta4", "Pergunta5", "Pergunta6", "Pergunta7", "Pergunta8"];
    const itemsRespostas = ["Resposta1", "Resposta2", "Resposta3", "Resposta4", "Resposta5", "Resposta6", "Resposta7", "Resposta8"];

    
    function increment(){
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

    function buttonRight(){
        if(itemsNum == 8){
            (props.funcaoResult)();
        }
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

    function buttonWrong(){
        console.log(temErro);
        settemErro(true);
        console.log(temErro);
        if(itemsNum == 8){
            (props.funcaoResult)();
        }
        (props.funcao)();
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

    return (
        <div class = {`${setHide} page2-box1 flex`}>
            <div class = "page2-num">
                <TituloPerguntaMini question = {itemsPerguntas[whichQuestion]} hide = {hideMini}/>
                <ContadorPerguntas question = {itemsNum} />
            </div>
            <div class = "page2-answer">
                <TituloPerguntaGrande question = {itemsPerguntas[whichQuestion]} hide = {hideBig}/>
                <Resposta resposta = {itemsRespostas[whichAnswer]} hide = {hideMini}/>
            </div>
            <div class = "page2-turn">
                <PageTwoTurn funcao = {increment} hide = {hideBig} />
                <PageTwoButtons funcaoAcerto = {buttonRight} funcaoErro = {buttonWrong} hide = {hideMini} />
            </div>
        </div>
    );
}