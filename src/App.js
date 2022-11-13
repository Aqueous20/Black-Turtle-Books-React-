import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
    console.log(removeItem, item);
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books books={books}></Books>}></Route>
          <Route
            path="/books/:id"
            element={
              <BookInfo
                books={books}
                addToCart={addToCart}
                cart={cart}
              ></BookInfo>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              ></Cart>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
