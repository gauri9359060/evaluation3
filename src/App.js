import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:productId ' element={<ProductDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
