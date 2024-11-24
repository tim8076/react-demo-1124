import './assets/styles/all.scss';
import Home from './components/Home';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
    </>
  )
}

export default App
