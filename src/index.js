import ReactDOM from "react-dom";

import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <>
        <PageOne />
        <PageTwo />
    </>
  );
}
ReactDOM.render(<App />, document.querySelector(".root"));