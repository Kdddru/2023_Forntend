import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { StoryList } from './pages/StoryList';
import { Story } from './pages/Story';
import { NavHeader } from './components/NavHeader';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <NavHeader/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/storylist' Component={StoryList}>
            <Route path='/storylist/:name' Component={Story}/>
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
