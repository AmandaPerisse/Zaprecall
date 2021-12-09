export default function PageTwoTurn(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    return (
        <button onClick = {() => (props.funcao)()}>
            <img class = {`${setHide}`} src = "img/turn.png" />
        </button>
    );
}