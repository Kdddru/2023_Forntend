import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { LoginForm } from './pages/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/loginform' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
