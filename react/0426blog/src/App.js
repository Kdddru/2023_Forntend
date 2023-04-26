import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Boardlist } from './page/Boardlist';
import { BoardForm } from './page/BoardForm';
import { LoginForm } from './page/LoginForm';
import { Board } from './page/Board';
import { ColorSchemesExample } from './components/ColorSchemesExample';


// bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavHeader } from './components/NavHeader';

function App() {
  return (
    <div className="App">
        <NavHeader/>   
        <Routes>
          <Route index Component={Home}/>
          <Route path='/boardlist' Component={Boardlist}/>
          <Route path='/board' Component={Board}/>
          <Route path='/boardform' Component={BoardForm}/>
          <Route path='/loginform' Component={LoginForm}/>
        </Routes>
    </div>
  );
}

export default App;
