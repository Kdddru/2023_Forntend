import { SimpleSlider } from "./components/SimpleSlider";
import { IconComp } from "./components/IconComp";


//slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';


function App() {
  return (
    <div className="App">
      <SimpleSlider/>
      <IconComp/>
    </div>
  );
}

export default App;
