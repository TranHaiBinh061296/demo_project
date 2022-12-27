import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import '../../../assets/css/user/style.css';
import './header.css';
import './mobile.css';
import {
  NavLink,
  NavMenu,
  CloseBtn,
  ToggleBtn,
  showNav,
  hideNav,
} from './handle.js';

function Header() {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [searchValue, setSearchValue] = useState();
  

  const searchProduct = () => {
    console.log(searchValue);
  }
  return (
    <>
      <section id='header'>
        <NavMenu className='navMenu'>
          <NavLink to='/' className='logo'>
            <img
              src={require('../../../assets/img/logo.png')}
              className='logo'
              alt=''
            />
          </NavLink>
          <div className='navLinkGroup hide'>
            <CloseBtn id='closeNavBtn' onClick={hideNav}>
              <i className='fa-solid fa-rectangle-xmark'></i>
            </CloseBtn>
            <NavLink to='/women'>Nữ</NavLink>
            <NavLink to='/men'>Nam</NavLink>
            <NavLink to='/kids'>Trẻ Em</NavLink>
            <NavLink to='/baby'>Trẻ Sơ Sinh</NavLink>
            <NavLink to='/contact'>Liên Hệ & đóng góp ý kiến</NavLink>
          </div>
        </NavMenu>

        <div className='navInfo'>
          <NavLink to='/userInfo'>
            <i className='fa-solid fa-user'></i>
            <span className='title'>Thông tin cá nhân</span>
          </NavLink>
          <NavLink to='/cart'>
            <i className='fa-solid fa-cart-shopping position-relative cart-icon'>
              {getdata.length === 0 ? (
                <span></span>
              ) : (
                <span
                  className='position-absolute top-0 start-100 translate-middle rounded'
                  style={{
                    fontSize: '0.6rem',
                    padding: '0.2rem 0.2rem 0rem 0.2rem',
                    backgroundColor: 'white',
                    border: ' 1px solid purple',
                    color: 'green',
                  }}
                >
                  {getdata.length}
                </span>
              )}
            </i>
           <span className='title'>Giỏ hàng</span>
          </NavLink>
        </div>
        <div>
          <ToggleBtn id='toggleBtn' onClick={showNav}>
            <i className='fas fa-outdent'></i>
          </ToggleBtn>
        </div>
      </section>
    </>
  );
}

export default Header;
