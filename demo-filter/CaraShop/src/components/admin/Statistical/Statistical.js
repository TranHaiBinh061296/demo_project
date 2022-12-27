import { useState, useEffect } from 'react';
import AdminSidebar from '../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';
import productService from '../../../service/productService';
import { useNavigate } from 'react-router-dom';

function Statistical() {
  const [products, setProducts] = useState([]);
  let startBalanceRandom = Math.floor(Math.random() * 10) + 30;
  let importNumber = Math.floor(Math.random() * 10);
  let exportNumber = Math.floor(Math.random() * 10) + 4;
  let importPro;
  let exportPro;
  let navigate = useNavigate();

  const loadProducts = () => {
    productService
      .getAllProducts()
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
  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-shirt'></i> Sản Phẩm / Thống Kê
              </h4>
              <AdminInfo />
            </nav>
            {/*search  */}

            <div className='search-time-group mt-4'>
              <div className='searchGroup me-3'>
                <i className='fa-solid fa-magnifying-glass'></i>
                <input
                  type='text'
                  className='ms-2 w-75 p-0'
                  placeholder='Tìm Kiếm...'
                />
              </div>
              <input type='date' />
              <i
                className='fa-solid fa-arrow-right'
                style={{ margin: '0 1rem' }}
              ></i>
              <input
                type='date'
                onChange={() => {
                  navigate('/statistical');
                }}
              />
            </div>

            {/* table */}
            <table className='table table-bordered mt-4 text-center align-middle table-hover'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Tên sản phẩm</th>
                  <th scope='col'>DVT</th>
                  <th scope='col'>Tồn Đầu</th>
                  <th scope='col'>Nhập</th>
                  <th scope='col'>Xuất</th>
                  <th scope='col'>Tồn cuối</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((pro) => (
                    <tr>
                      <td>{pro.id}</td>
                      <th>{pro.productName}</th>
                      <td>cái</td>
                      <td>{pro.stock + startBalanceRandom}</td>

                      <td>{pro.stock - importNumber}</td>
                      <span className='d-none'>
                        {(importPro = pro.stock - importNumber)}
                      </span>

                      <td>{pro.stock - exportNumber}</td>
                      <span className='d-none'>
                        {(exportPro = pro.stock - exportNumber)}
                      </span>
                      <td>
                        {pro.stock + startBalanceRandom + importPro - exportPro}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistical;
