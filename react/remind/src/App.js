import './App.css';
import { DataBox } from './context/DataBox';
import { DataBox2 } from './context/DataBox2';
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <div className="App">
    <DataProvider>
      <DataBox/>
      <DataBox2/>
    </DataProvider>
    </div>
  );
}

export default App;
