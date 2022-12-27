import {React, useState, useEffect} from 'react';
import AdminSidebar from '../SideBar/AdminSidebar';
import productService from '../../../service/productService';
import { Bar, Doughnut } from 'react-chartjs-2';
import { brandData } from './brandData.js';
import { searchData } from './searchData';
import { Chart } from 'chart.js/auto';
import AdminInfo from './../adminInfo/AdminInfo';

import './adminDashboard.css';
import '../../../assets/css/admin/style.css';
function AdminDashboard() {

  const [products, setProducts] = useState([]);

  // du lieu ao
    let count = 1;
    let number =0 , total = 0;
    let vndFormat = Intl.NumberFormat('vi-VN')
  //

  const loadProducts = () => {
    productService.getAllProducts()
      .then((result) =>{
        setProducts(result.data);
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    loadProducts();
  }, []);




  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />

        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-house'></i> Trang Chủ
              </h4>
              <AdminInfo />
            </nav>
            {/* search */}
            <div className='search-time-group mt-4'>
              <input type='date' defaultValue='dd/mm/yyyy' />
              <i
                className='fa-solid fa-arrow-right'
                style={{ margin: '0 1rem' }}
              ></i>
              <input type='date' defaultValue='dd/mm/yyyy' />
            </div>
            {/* label */}
            <div className='chart-label-group'>
              <div className='chart-label'>
                <i className='fa-solid fa-cart-shopping'></i>
                <h3>
                  250{' '}
                  <span style={{ fontSize: '0.7rem' }}>
                    <i className='fa-solid fa-arrow-up'></i>4.5%
                  </span>
                </h3>
                <h4>Đơn hàng</h4>
              </div>

              <div className='chart-label'>
                <i className='fa-solid fa-sack-dollar'></i>
                <h3>
                  1,800k{' '}
                  <span style={{ fontSize: '0.7rem' }}>
                    <i className='fa-solid fa-arrow-up'></i>4.5%
                  </span>
                </h3>
                <h4>Doanh Thu</h4>
              </div>

              <div className='chart-label'>
                <i className='fa-solid fa-eye'></i>
                <h3>
                  735{' '}
                  <span style={{ fontSize: '0.7rem' }}>
                    <i className='fa-solid fa-arrow-up'></i>4.5%
                  </span>
                </h3>
                <h4>Lượt xem</h4>
              </div>

              <div className='chart-label'>
                <i className='fa-solid fa-comments'></i>
                <h3>
                  115{' '}
                  <span style={{ fontSize: '0.7rem' }}>
                    <i className='fa-solid fa-arrow-up'></i>4.5%
                  </span>
                </h3>
                <h4>Lượt Đánh Giá</h4>
              </div>
            </div>

            {/* charts */}
            <div className='chartGroup'>
              <div className='barChart'>
                <h4>Top Sản Phẩm Bán Chạy</h4>
                <Bar data={brandData} />
              </div>
              <div className='lineChart'>
                <h4>Top tìm kiếm</h4>
                <Doughnut data={searchData} />
              </div>
            </div>

            {/* sales */}
            <div>
              <h2>Doanh Số Bán Hàng</h2>
              <table className='table table-hover mt-3 '>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Doanh Thu</th>
                  </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                
                        <th>{count++}</th>
                        <th>{product.productName}</th>
                        <td>{product.stock -2}</td>
                        <td>{vndFormat.format(product.price)}</td>
                        <td>{vndFormat.format((product.stock -2) * product.price)}</td>
                        <td  className='d-none'>
                        <span>{ number+=product.stock -2}</span>
                        <span>{total += (product.stock -2) * product.price}</span>
                        </td>
        
                       </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan='2'>Tổng cộng</th>
                    <th>{number}</th>
                    <th></th>
                    <th>{vndFormat.format(total) + 'đ'}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
