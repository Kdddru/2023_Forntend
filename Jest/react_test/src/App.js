import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import Countview from './components/Countview';

function App() {
  return (
    <div className="App">
      <CheckboxWithLabel labelOn={'on'} labelOff={'off'}/>
      <Countview count={5}/>
    </div>
  );
}

export default App;
