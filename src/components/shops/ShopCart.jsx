// import React, { useState } from "react"

// const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
// }

// export default ShopCart

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';

function ShopCart({ shopItems, addToCart }) {
  const history = useHistory();
  const { setProductDetail } = useProduct();
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const handleRedirectToProductDetail = (product) => {
    setProductDetail(product);
    history.push(`/details/${product.id}`);
  };

  return (
    <>
      {shopItems.map((shopItems) => (
        <div className="box" onClick={() => handleRedirectToProductDetail(shopItems)}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">
                {shopItems.discount}
                % Off
              </span>
              <img src={shopItems.cover} alt="" />
              <div className="product-like">
                <p>{count}</p>
                {' '}
                <br />
                <i className="fa-regular fa-heart" onClick={increment} />
              </div>
            </div>
            <div className="product-details">
              <h3>{shopItems.name}</h3>
              <div className="rate">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                <h4>
                  $
                  {shopItems.price}
                  .00
                  {' '}
                </h4>
                {/* step : 3
                     if hami le button ma click garryo bahne
                    */}
                <button onClick={(e) => {
                  e.stopPropagation();
                  addToCart(shopItems);
                }}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShopCart;
