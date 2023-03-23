import React from 'react';
import './Header.css';
// import Head from "./Head";
import Search from './Search';
import Navbar from './Navbar';
import { useProduct } from '../../context/ProductContext';

function Header() {
  const { CartItem } = useProduct();
  return (
    <>
      {/* <Head /> */}
      <Search CartItem={CartItem} />

      <Navbar />
    </>
  );
}

export default Header;
