import './App.css';
import { CounterBox } from './components/CounterBox';
import { CounterNumber } from './components/CounterNumber';
import { ExConterbox } from './components/ExConterbox';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <ExConterbox/>
      <CounterNumber/>
    </div>
  );
}

export default App;
