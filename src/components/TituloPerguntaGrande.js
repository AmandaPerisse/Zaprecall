export default function TituloPerguntaGrande(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    return (
        <h1 class = {`${setHide}`}>
            {props.question}
        </h1>
    );
}