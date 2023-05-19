import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import About from './page/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
