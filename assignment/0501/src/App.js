import { Route, Routes } from 'react-router-dom';
import { Slick } from './components/Slick';

//slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Slick/>}/>
      </Routes>
    </div>
  );
}

export default App;
