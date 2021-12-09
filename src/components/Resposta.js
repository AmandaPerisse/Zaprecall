export default function Resposta(props){

    let setHide = "";
    if (props.hide){
        setHide = "hide";
    }
    else{
        setHide = "";
    }

    return (
        <h6>
            {props.resposta}
        </h6>
    );
}