import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products-all" element={<ProductList />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;