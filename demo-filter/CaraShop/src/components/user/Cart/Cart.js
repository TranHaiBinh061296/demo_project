import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../../redux/actions/action';
import Penguin from '../PenGuin/Penguin';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

import './cart.css';
import './mobile.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../service/loginSignupService';
function Cart() {
  let loginUser = JSON.parse(localStorage.getItem('loginUser'));

  let Navigate = useNavigate();
  let vndFormat = Intl.NumberFormat('vi-VN');
  const [totalPrice, setTotalPrice] = useState(0);
  let [itemAmount, setItemAmount] = useState(1);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setTotalPrice(price);
  };

  const getDetailPage = (id) => {
    Navigate(`/products/${id}`);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Header />
      {getdata.length !== 0 ? (
        <div>
          {/* banner */}
          <section className='banner'>
            <img
              src={require('../../../assets/img/banner/kidsBanner.jpg')}
              className='img-fluid'
            ></img>
          </section>

          {/* cart infomations*/}
          <section className='row mt-5 mx-0 cartDetail'>
            <div className=' col-sm-12 col-md-12 col-lg-8'>
              <h3>Giỏ hàng</h3>
              <div className='table-responsive'>
                <table className='table text-center align-baseline table-responsive'>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Hình Ảnh</td>
                      <td>Tên Sản Phẩm</td>
                      <td>Giá</td>
                      <td>Số Lượng</td>
                      <td>Tổng Tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((e) => (
                      <tr key={e.id}>
                        <td>
                          <a onClick={() => dlt(e.id)}>
                            <i className='fa-solid fa-trash text-danger'></i>
                          </a>
                        </td>
                        <td>
                          <img
                            src={e.imageUrl}
                            className='img-fluid rounded'
                            style={{ width: '70px' }}
                            alt=''
                          />
                        </td>
                        <td>{e.productName}</td>
                        <td>{`${vndFormat.format(e.price)}đ`}</td>
                        <td>
                          <input
                            type='number'
                            defaultValue='1'
                            min='1'
                            style={{ width: '4rem' }}
                            onChange={(event) => {
                              e.qnty = event.target.value;
                            }}
                          />
                        </td>
                        <td>{`${vndFormat.format(e.price)}đ`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className='subtotal col-sm-12 col-md-12 col-lg-4 mt-4'>
              <div className='border border-dark p-2 rounded'>
                <div>
                  <span>Giao tới</span>
                  <hr />
                  <div>
                    <span className='fs-4 fw-bold'>
                      {`${loginUser.firstName} ${loginUser.lastName}`}
                      <br />
                    </span>
                    <span className='fw-bold'>
                      Sdt: {loginUser.phoneNumber}
                      <br />
                    </span>
                    <span>{loginUser.address}</span>
                  </div>
                </div>
                <div className='mt-4'>
                  <hr />
                  <span>Đơn hàng: {getdata.length} sản phẩm</span>
                  <hr />

                  {getdata.map((e) => (
                    <div key={e.id} className='d-flex justify-content-between'>
                      <span>{`${e.qnty}x`}</span>
                      <span>{e.productName}</span>
                      <span>{`${vndFormat.format(e.price * e.qnty)}đ`}</span>
                    </div>
                  ))}

                  <hr />

                  <div>
                    <div className='d-flex justify-content-between'>
                      <span>Tạm tính</span>
                      <span>{`${vndFormat.format(totalPrice)}đ`}</span>
                    </div>

                    <div className='d-flex justify-content-between'>
                      <span>Phí vận chuyển</span>
                      <span>free</span>
                    </div>

                    <div className='d-flex justify-content-between align-baseline mt-2'>
                      <span>
                        <input className='p-1' placeholder='Mã giảm giá' />
                      </span>
                      <span>
                        <button className='p-1'>Áp dụng</button>
                      </span>
                    </div>
                  </div>
                  <hr />

                  <div className='d-flex justify-content-between'>
                    <span>Tổng tiền</span>
                    <span className='text-danger fw-bold'>{`${vndFormat.format(
                      totalPrice
                    )}đ`}</span>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-end mt-3'>
                <button
                  className='normal'
                  data-bs-toggle='modal'
                  data-bs-target='#confirmModal'
                >
                  Đặt Hàng
                </button>
              </div>
            </div>
          </section>

          {/* modal confirm */}
          <div
            className='modal fade'
            id='confirmModal'
            data-bs-backdrop='static'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>Xác Nhận Đặt Hàng</h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  <p className='fw-bold'>
                    Giao Đến: {`${loginUser.firstName} ${loginUser.lastName}`}
                  </p>
                  <p className='fw-bold'>Sdt: {loginUser.phoneNumber}</p>
                  <p className='fw-bold'>Địa chỉ: {loginUser.address}</p>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <span>Tạm tính</span>
                    <span>{`${vndFormat.format(totalPrice)}đ`}</span>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <span>Phí vận chuyển</span>
                    <span>free</span>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <span>Tổng tiền</span>
                    <span className='text-danger fw-bold'>{`${vndFormat.format(
                      totalPrice
                    )}đ`}</span>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Đóng
                  </button>
                  <button
                    type='button'
                    className='btn btn-success'
                    data-bs-dismiss='modal'
                    onClick={() => {
                      Swal.fire({
                        title: 'Đặt Hàng Thành Công',
                        position: 'top-center',
                        icon: 'success',
                        showConfirmButton: true,
                        confirmButtonColor: 'green',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          while (getdata.length > 0) {
                            getdata.pop();
                          }
                          window.location.reload();
                        }
                      });

                      // setTimeout(window.location.reload(), 10000);
                    }}
                  >
                    Đặt Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <div className='container text-center mt-5'>
          <h1>Bạn Không có sản phẩm nào trong giỏ hàng!!!</h1>
          <Penguin />
          <Link to='/' className='btn btn-primary'>
            Tiếp tục mua Sắm
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
