import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headers from './Components/Headers';
import Index from './Components/Index';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
