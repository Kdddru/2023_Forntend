import './App.css';
import { CounterBox } from './components/CounterBox';
import { CounterNumber } from './components/CounterNumber';
import { ExConterbox } from './components/ExConterbox';
import { MemoComp } from './components/MemoComp';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <ExConterbox/>
      <CounterNumber/>
      <MemoComp/>
    </div>
  );
}

export default App;
