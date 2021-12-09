export default function PageTwoButtons(){

    const items = [
        {num: "1", mensagem: "Aprendi<br/>agora"},
        {num: "2", mensagem: "Não<br/>lembrei"},
        {num: "3", mensagem: "Lembrei<br/>com<br/>esforço"},
        {num: "4", mensagem: "Zap!"}
    ];

    return (
        <div class = "hide page2-buttons">
            {items.map((item) => {
                return <Button num = {item.num} mensagem = {item.mensagem} />
            })}
        </div>
    );
}
function Button(props){
    return (
        <button class = {`page2-button button${props.num}`}>
            <p class = "p2">
                {props.mensagem}
            </p>
        </button>
    );
}