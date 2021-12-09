export default function PaginaInicial(props){

    return (
        <button onClick = {() => (props.funcao)()} class = "page1-button flex">
        <h4>
            Praticar React
        </h4>
        <img src = "img/next.png" />
    </button>
    );
}