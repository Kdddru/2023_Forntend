import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from './components/CheckboxWithLabel';

function App() {
  return (
    <div className="App">
      <CheckboxWithLabel labelOn={'on'} labelOff={'off'}/>
    </div>
  );
}

export default App;
