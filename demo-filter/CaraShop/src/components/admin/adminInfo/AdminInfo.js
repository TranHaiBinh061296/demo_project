import './AdminInfo.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminInfo() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('loginUser');
  };
  return (
    <>
      <div className='d-flex align-items-center me-3'>
        <div className='adminInfoGroup'>
          <img
            src={require('../../../assets/img/people/adminAvatar.jpg')}
            alt='admin avatar'
            className='adminAvatar'
          ></img>
          <span className='ms-2 fw-bold'>Cara Shop</span>
          <div className='adminInfo-dropdown'>
            <ul>
              <li>
                <button>
                  <i className='me-1 fa-solid fa-user'></i>
                  <Link to='/userInfo'>Hồ sơ</Link>
                </button>
              </li>
              <li>
                <button
                  onClick={function () {
                    Swal.fire({
                      title: 'Bạn có chắc đăng xuất không?',
                      showDenyButton: true,
                      showCancelButton: true,
                      showConfirmButton: false,
                      denyButtonText: `Đăng xuất`,
                    }).then((result) => {
                       if (result.isDenied) {
                      logout();
                      navigate('/login')
                      }
                    })
                  }}
                >
                  <i 
                  className='me-1 fa-solid fa-right-from-bracket'
                  
                  ></i>
                  Đăng Xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='ms-2 adminNoteGroup'>
          <div className=''>
            <i className='fa-solid fa-bell fs-5'></i>
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1'>
              3
            </span>
          </div>
          <div className='noteGroup '>
            <ul>
              <li>Thêm sản phẩm áo Jacket</li>
              <li>Cập nhật giá Quần Kaki lên 500.000 vnd</li>
              <li>Đầm Canva sắp hết hàng</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminInfo;
