import React from 'react';

import TituloPerguntaMini from "./TituloPerguntaMini";
import TituloPerguntaGrande from "./TituloPerguntaGrande";
import PageTwoButtons from "./PageTwoButtons";
import Resposta from "./Resposta";

export default function PageTwoBoxOne(){

    const [itemsNum, setitemsNum] = React.useState(1);
    const [whichAnswer, setwhichAnswer] = React.useState(0);
    const [whichQuestion, setwhichQuestion] = React.useState(0);
    const [hideBig, sethideBig] = React.useState(false);
    const [hideMini, sethideMini] = React.useState(true);
    const [hideAnswer, sethideAnswer] = React.useState(true);

    const itemsPerguntas = ["Pergunta1", "Pergunta2", "Pergunta3", "Pergunta4", "Pergunta5", "Pergunta6", "Pergunta7", "Pergunta8"];
    const itemsRespostas = ["Resposta1", "Resposta2", "Resposta3", "Resposta4", "Resposta5", "Resposta6", "Resposta7", "Resposta8"];

    function increment(){
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
        if (hideAnswer){
            sethideAnswer(false);
        }   
        else{
            sethideAnswer(true);
        }
    }

    return (
        <div class = "page2-box1 flex">
            <div class = "page2-num">
                <TituloPerguntaMini question = {itemsPerguntas[whichQuestion]} hide = {hideMini}/>
                <h5>
                    {itemsNum}/8
                </h5>
            </div>
            <div class = "page2-answer">
                <TituloPerguntaGrande question = {itemsPerguntas[whichQuestion]} hide = {hideBig}/>
                <Resposta resposta = {itemsRespostas[whichAnswer]} hide = {hideAnswer}/>
            </div>
            <div class = "page2-turn">
                <button onClick = {() => increment()}>
                    <img  src = "img/turn.png" />
                </button>
                <PageTwoButtons />
            </div>
        </div>
    );
}