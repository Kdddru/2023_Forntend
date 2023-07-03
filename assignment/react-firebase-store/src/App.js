import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { FireStoreTest } from './pages/FireStoreTest';

function App() {
  return (
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/firestore' element={<FireStoreTest/>}/>
      </Routes>
  );
}

export default App;
