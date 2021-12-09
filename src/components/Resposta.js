export default function Resposta(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    return (
        <h6 class = {`${setHide}`}>
            {props.resposta}
        </h6>
    );
}