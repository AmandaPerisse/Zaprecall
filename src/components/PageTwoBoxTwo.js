import React from 'react';

export default function PageTwoBoxTwo(props){

    let num = 0;

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    const items = [
        {titulo: "PARABÉNS", img: "party", mensagem: "Você não esqueceu de nenhum flashcard!"},
        {titulo: "Putz..", img: "sad", mensagem: "Você esqueceu alguns flashcards..\nNão desanime! Na próxima você consegue!"},
    ];

    if (props.erros > 0){
        num = 1;
    }

    return (
        <div class = {`${setHide} page2-box2 flex`}>
            <div class = "flex">
                <p class = "p3">
                    {items[num].titulo}
                </p>
                <img src = {`img/${items[num].img}.png`} />
            </div>
            <h2>
                {items[num].mensagem}
            </h2>
        </div>
    );
}