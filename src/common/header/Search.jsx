import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import logo from '../../components/assets/images/logo.png';
import { LoginModal } from '../../components/LoginModal';
import { RegisterModal } from '../../components/RegisterModal';

function Search({ CartItem }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const search = document.querySelector('.search');
      search.classList.toggle('active', window.scrollY > 100);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        const search = document.querySelector('.search');
        search.classList.toggle('active', window.scrollY > 100);
      });
    };
  }, []);

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleOpenRegisterModal = () => {
    setOpenRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setOpenRegisterModal(false);
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search" />
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <Stack direction="row" alignItems="center" className="icon f_flex width" columnGap={3}>
            {/* <i className="fa fa-user icon-circle" /> */}
            {/* <LoginSignup /> */}
            <Button onClick={handleOpenLoginModal}>
              <Typography sx={{ color: '#000000', textTransform: 'none' }}>Sign In</Typography>
            </Button>
            <Button onClick={handleOpenRegisterModal}>
              <Typography sx={{ color: '#000000', textTransform: 'none' }}>Sign Up</Typography>
            </Button>
            <Link to="/cart">
              <div className="cart">
                <i className="fa fa-shopping-bag icon-circle" />
                <span>{CartItem.length === 0 ? '' : CartItem.length}</span>
              </div>
            </Link>
          </Stack>
        </div>
      </section>
      <LoginModal open={openLoginModal} onClose={handleCloseLoginModal} />
      <RegisterModal open={openRegisterModal} onClose={handleCloseRegisterModal} />
    </>
  );
}

export default Search;
