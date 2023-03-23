import React from 'react';
import FlashCard from './FlashCard';
import './style.css';

function FlashDeals({ productItems, addToCart }) {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1>Flash Delas</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart} />
      </div>
    </section>
  );
}

export default FlashDeals;
