export default function PageTwoButtons(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    const items = [
        {num: "1", mensagem: "Aprendi\nagora", funcao: props.funcaoAcerto },
        {num: "2", mensagem: "Não\nlembrei", funcao: props.funcaoErro},
        {num: "3", mensagem: "Lembrei\ncom\nesforço", funcao: props.funcaoAcerto},
        {num: "4", mensagem: "Zap!", funcao: props.funcaoAcerto}
    ];

    return (
        <div class = {`${setHide} page2-buttons`}>
            {items.map((item) => {
                return <Button num = {item.num} mensagem = {item.mensagem} funcao = {item.funcao} />
            })}
        </div>
    );
}
function Button(props){
    return (
        <button onClick = {() => (props.funcao)(props.num)} class = {`page2-button button${props.num}`}>
            <p class = "p2">
                {props.mensagem}
            </p>
        </button>
    );
}