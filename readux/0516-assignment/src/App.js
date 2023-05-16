import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { MemoList } from './components/MemoList';
import { FavoriteMemoList } from './components/FavoriteMemoList';

function App() {
  return (
    <div className="App">
      <Link to={'/'}>홈</Link>
      <Link to={'/favorite'}>즐겨찾기</Link>
      <Routes>
        <Route index element={<MemoList/>}/>
        <Route path='/favorite' element={<FavoriteMemoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
