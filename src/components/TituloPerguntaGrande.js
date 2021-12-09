export default function TituloPerguntaGrande(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }
    console.log(setHide);
    console.log(props.hide);

    return (
        <h1 class = {`${setHide}`}>
            {props.question}
        </h1>
    );
}