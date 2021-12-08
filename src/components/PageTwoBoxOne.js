import TituloPerguntaMini from "./TituloPerguntaMini";
import TituloPerguntaGrande from "./TituloPerguntaGrande";
import PageTwoTurn from "./PageTwoTurn";
import PageTwoButtons from "./PageTwoButtons";

export default function PageTwoBoxOne(){
    return (
        <div class = "page2-box1 flex">
            <div class = "page2-num">
                <TituloPerguntaMini />
                <h5>
                    1/8
                </h5>
            </div>
            <div class = "page2-answer">
                <TituloPerguntaGrande />
                <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Non ullamcorper at quis 
                    eu. Malesuada iaculis viverra a tincidunt 
                    arcu nullam. Orci tortor arcu placerat id 
                    sit et. Elementum in erat cras tortor at 
                    auctor diam.
                </p>
            </div>
            <div class = "page2-turn">
                <PageTwoTurn />
                <PageTwoButtons />
            </div>
        </div>
    );
}