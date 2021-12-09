export default function PageTwoBoxTwo(){

    const items = [
        {titulo: "PARABÉNS", img: "party", mensagem: "Você não esqueceu de nenhum flashcard!"},
        {titulo: "Putz..", img: "sad", mensagem: "Você esqueceu alguns flashcards..<br />Não desanime! Na próxima você consegue!"},
    ];

    return (
        <div class = "hide page2-box2 flex">
            <div class = "flex">
                <p class = "p3">
                    PARABÉNS
                </p>
                <img src = "img/party.png" />
            </div>
            <h2>
                Você não esqueceu de nenhum flashcard!
            </h2>
        </div>
    );
}