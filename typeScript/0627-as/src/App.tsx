
import './App.css';
import CounterComp from './components/CounterComp';

function App() {
  return (
    <div className="App">
      <CounterComp startNumber={20} Idarray={[
        {
        id:1,
        text: 'one'
      },
      {
        id:2,
        text:'two'
      }
      ]}/>
    </div>
  );
}

export default App;
