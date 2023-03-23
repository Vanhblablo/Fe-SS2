import React from 'react';
// import Catg from "./Catg";
import ShopCart from './ShopCart';
import './style.css';

function Shop({ addToCart, shopItems }) {
  return (
    <section id="shop" className="shop background">
      <div className="container d_flex">
        {/* <Catg /> */}

        <div className="contentWidth">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              {/* category */}
              <h1>
                Category
                <i className="fa-solid fa-caret-down" />
              </h1>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right" />
            </div>
          </div>
          <div className="product-content  grid1">
            <ShopCart addToCart={addToCart} shopItems={shopItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
