import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Story } from './page/Story';
import { Header } from './page/Header';
import { DataProvider } from './components/DataContext';
import { Fruit } from './page/Fruit';

function App() {
  return (
    <div className="App">
    <DataProvider>
      <Routes>
        <Route path='/' Component={Header}>
          <Route path='/home' Component={Home}/>
          <Route path='/story' Component={Story}>
            <Route path='/story/:id' Component={Fruit}/>
          </Route>
        </Route>
      </Routes>
    </DataProvider>
    </div>
  );
}

export default App;
