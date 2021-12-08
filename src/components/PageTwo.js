import PageTwoBoxOne from "./PageTwoBoxOne";
import PageTwoBoxTwo from "./PageTwoBoxTwo";

export default function PageTwo(){
    return (
        <div  class = "page2">
            <header class = "header">
                <img src = "img/logo-mini.png" />
            </header>
            <PageTwoBoxOne />
            <PageTwoBoxTwo />
        </div>
    );
}