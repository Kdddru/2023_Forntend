import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { Main } from './page/Main';
import { Login } from './page/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
