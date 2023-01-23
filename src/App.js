import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './Books/books';
import Cart from './Cart/cart';
import Nav from './Nav/Nav';


function App() {

  const [cart, setCart] = useState([]);

  const onClickAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const onClickRemoveFromCart = (bookId) => {
    const bookIndex = cart.findIndex(book => book.id === bookId);
    const tempCart = [...cart];
    tempCart.splice(bookIndex, 1);
    setCart(tempCart);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Books onClickAddToCart={onClickAddToCart} cart={cart} />} />
          <Route path='/cart' element={<Cart onClickRemoveFromCart={onClickRemoveFromCart} cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
