import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';
import { ProductContextProvider } from './context/ProductContext';
import { ProductDetailsPage } from './pages/Details';
import { theme } from './styles/theme';
import './infra/http/axios';

function App() {
  /*
  step1 :  const { productItems } = Data
  lai pass garne using props

  Step 2 : item lai cart ma halne using useState

  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  return (
    <ThemeProvider theme={theme}>
      <ProductContextProvider>
        <Router>
          <ToastContainer />
          <Header />
          <Switch>
            <Route path="/" exact>
              <Pages />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/details/:id" exact>
              <ProductDetailsPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ProductContextProvider>
    </ThemeProvider>
  );
}

export default App;
