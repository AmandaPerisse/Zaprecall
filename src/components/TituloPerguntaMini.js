export default function TituloPerguntaMini(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    return (
        <h6 class = {`${setHide}`}>
            {props.question}
        </h6>
    );
}