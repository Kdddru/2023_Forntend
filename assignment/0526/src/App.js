import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './page/Main';
import { Login } from './page/Login';

function App() {
  return (
    <Routes>
      <Route index element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
