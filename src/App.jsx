import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/navbar/Navbar";

library.add(fas, far, fab);

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
    </>
  );
}

export default App;
