import React, { Component } from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Shop from './Components/Shop';
import '../src/index.css';
import data from './Components/data';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([])
  return(
    <div class="App"> 
      <Header></Header>
      <div class="row">
      <Main products={products}></Main>
      <Shop cartItems={cartItems}></Shop>
      </div>
    </div>
  );
}

export default App;