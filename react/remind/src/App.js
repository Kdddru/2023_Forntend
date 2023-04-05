import './App.css';
import Mapremind from './components/Mapremind';
import productData from './data/products.json';

function App() {
  console.log(productData);
  return (
    <div className="App">
    <Mapremind product={productData}/>
    </div>
  );
}

export default App;
