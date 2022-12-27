import React, { useState, useEffect } from 'react';
import productService from '../../../service/productService';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../redux/actions/action';
import { vndFormatter } from '../../../helper/functions';

import './product.css';
import './mobile.css';

function Product() {
  let loginUser = localStorage.getItem('loginUser');
  let navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  const loadProduct = () => {
    productService
      .getOneProduct(id)
      .then((result) => {
        setProducts(result.data.data);
      })
      .catch((err) => {
        console.log(`Err: ${err}`);
      });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <>
      <Header />
      <div className='container mt-5'>
        {products === undefined ? (
          <span>Loading...</span>
        ) : (
          <div key={products.id} className='productGroup row'>
            <div className='productImage col-sm-12 col-md-5 col-lg-5'>
              <img
                src={products.imageUrl}
                alt=''
                className='img-fluid productImg'
              />
              <div className='mt-4 productDescr'>
                <hr />
                {/*  */}
                <div className=' w-100'>
                  <h4 className=''>Tổng quan</h4>
                  <div className=''>
                    <p>- Mã sản phẩm 444996</p>
                    <p>- Hoàn hảo để mặc riêng hoặc phối nhiều lớp.</p>
                    <p>- Thiết kế dáng rộng hiện đại thoải mái.</p>
                    <p>- Họa tiết thiết kế đa năng.</p>
                  </div>
                </div>
                <hr />
                {/*  */}
                <div className='w-100'>
                  <h4>Chất Liệu</h4>
                  <div>
                    <p>- 100% cotton</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='productInfo col-sm-12 col-md-5 col-lg-5'>
              <h2>{products.productName}</h2>
              <del>{`${vndFormatter(products.price + 99000)} VND`}</del>
              <div className=''>
                <p className='text-danger fw-bold'>{`${vndFormatter(
                  products.price
                )} VND`}</p>
                <p className='text-danger fw-bold'>Sale</p>
                <div className='star text-warning my-3'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              <p>{products.descr}</p>
              <hr></hr>
              <h5>Kích Cỡ</h5>
              <select className='form-select w-10'>
                <option value='s'>S</option>
                <option value='m'>M</option>
                <option value='l'>L</option>
                <option value='xl'>XL</option>
                <option value='xxl'>XXL</option>
              </select>
              <h5 className='mt-4'>Số Lượng</h5>
              <input
                type='number'
                className='w-10'
                min={1}
                defaultValue={1}
                onChange={(event) => {}}
              />

              <div className='mt-4'>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    if (loginUser) {
                      send(products);
                      Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Đã Thêm Vào Giỏ Hàng',
                        showConfirmButton: false,
                        timer: 1000,
                      });
                    } else {
                      Swal.fire({
                        position: 'top-center',
                        icon: 'warning',
                        title: 'Bạn cần đăng nhập để mua hàng',
                        showConfirmButton: false,
                        timer: 1000,
                      });
                      navigate('/login');
                    }
                  }}
                >
                  Thêm Vào Giỏ Hàng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Product;
