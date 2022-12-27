import { Link } from 'react-router-dom';
import './adminSidebar.css';
import '../../../assets/css/admin/style.css';
import { NavLink } from './handle';

function AdminSidebar() {
  return (
    <>
      <div id='adminSideBar'>
        <div className='top mt-2'>
          <Link to='/admin'>
            <img src={require('../../../assets/img/logo.png')} alt=''></img>
          </Link>
          <hr></hr>
        </div>
        <div className='center'>
          <div>
            <ul>
              <li>
                <NavLink to='/admin'>
                  <i className='fa-solid fa-house'></i>
                  Trang Chủ
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='mt-4'>
            SẢN PHẨM
            <ul>

              <li>
                <NavLink to='/category'>
                <i className="fas fa-clipboard-list"></i>
                  Doanh Mục
                </NavLink>
              </li>
              
              <li>
                <NavLink to='/productManagement'>
                  <i className='fa-solid fa-list'></i>
                  Quản Lí Sản Phẩm
                </NavLink>
              </li>

              <li>
                <NavLink to='/statistical'>
                  <i className='fa-solid fa-file-pen'></i>
                  Thống Kê
                </NavLink>
              </li>

            </ul>
          </div>

          <div className='mt-4'>
            ĐƠN HÀNG
            <ul>
              <li>
                <NavLink to='/orderManagement'>
                  <i className='fa-solid fa-cart-shopping'></i>
                  Quản Lí Đơn Hàng
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='mt-4'>
            KHÁCH HÀNG
            <ul>
              <li>
                <NavLink to='/accountManagement'>
                  <i className='fa-solid fa-user'></i>
                  Quản Lí Khách Hàng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
