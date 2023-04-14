import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {Boardlist} from './pages/boardlist';
import { Board } from './pages/board';
import { Layout } from './pages/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home}/>
          <Route path='/boardlist' Component={Boardlist}/>
          <Route path='/boardlist/:id' Component={Board}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
