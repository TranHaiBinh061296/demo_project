import React, { useState, useEffect } from 'react';
import productService from '../../../service/productService.js';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../../assets/css/user/style.css';
import { Link, useNavigate } from 'react-router-dom';
function Kids() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const searchProduct = () => {
    if (searchValue) {
      productService
        .searchProductByCateAndName(3, searchValue)
        .then((response) => {
          console.log(response.data.data);
          setProducts(response.data.data);
        })
        .then((data) => {
          console.log('data: ' + data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log(false);
    }
  };

  let Navigate = useNavigate();

  const loadProducts = () => {
    productService
      .getProductByType(3)
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const getDetailPage = (id) => {
    Navigate(`/products/${id}`);
  };

  let vndFormat = Intl.NumberFormat('vi-VN');

  return (
    <>
      <Header />
      {/* page banner */}
      <div className='banner'>
        <img
          src={require('../../../assets/img/banner/kidsBanner.jpg')}
          className='img-fluid'
        ></img>
      </div>

      {/* products 1*/}
      <section className='product section'>
        <div className='title'>
          <h3>Sản Phẩm Bán Chạy</h3>
        </div>
        <div className='pro-container'>
          <div id='searchGroup'>
            <input
              className=''
              placeholder='Tìm kiếm theo từ khóa'
              onChange={(e) => {
                setSearchValue(e.target.value);
                searchProduct();
              }}
            />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='pro-container'>
          {products &&
            products.map((product) => (
              <div
                className='pro'
                key={product.id}
                onClick={() => getDetailPage(product.id)}
              >
                <img src={product.imageUrl} alt='' />
                <div className='des'>
                  <span>cara</span>
                  <h5>{product.productName}</h5>
                  <div className='star'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>{`${vndFormat.format(product.price)} VND`}</h4>
                </div>
                <a href='#'>
                  <i className='fa-solid fa-cart-arrow-down cart'></i>
                </a>
              </div>
            ))}
        </div>
      </section>

      <div className='banner'>
        <img
          src={require('../../../assets/img/banner/freeship.jpg')}
          className='img-fluid'
        ></img>
      </div>

      {/* pagination */}
      {/* <section id='pagination' className='section-p1'>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>
          <i className='fa-solid fa-arrow-right'></i>
        </a>
      </section> */}
      <Footer />
    </>
  );
}

export default Kids;
