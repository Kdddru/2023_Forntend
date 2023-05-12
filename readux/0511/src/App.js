import './App.css';
import { CounterBox } from './components/CounterBox';
import { CounterNumber } from './components/CounterNumber';
import { CounterThunk } from './components/CounterThunk';
import { ExConterbox } from './components/ExConterbox';
import { MemoComp } from './components/MemoComp';
import { WeatherThunk } from './components/WeatherThunk';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <ExConterbox/>
      <CounterNumber/>
      <MemoComp/>
      <CounterThunk/>
      <WeatherThunk/>
    </div>
  );
}

export default App;
