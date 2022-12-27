import Header from './../Header/Header';
import './userInfo.css';
import { range } from '../../../helper/functions';
import Swal from 'sweetalert2';

export default function UserInfo() {
  let userLoggedin = JSON.parse(localStorage.getItem('loginUser'));
  let dayRange = range(1, 31, 1);
  let monthRange = range(1, 12, 1);
  let yearRange = range(1920, 2022, 1);

  const logout = () => {
    localStorage.removeItem('loginUser');
  };
  return (
    <>
      <Header />
      <div className='container userInfo'>
        <h3 className='mt-4'>Thông tin tài khoản</h3>
        <div className='row border rounded p-2'>
          <div className='left-col col-xs-12 col-sm-12 col-lg-6 col-xl-6'>
            {/*  */}
            <h6>Thông tin cá nhân</h6>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-lg-3 pe-0 m-sm-auto avt-group'>
                <div className='avt'>
                  <img
                    src={require('../../../assets/img/people/adminAvatar.jpg')}
                    className=''
                  ></img>
                </div>
                <button
                  className='btn btn-danger mt-3'
                  onClick={() => {
                    Swal.fire({
                      title: 'Bạn có chắc đăng xuất không?',
                      showDenyButton: true,
                      showCancelButton: true,
                      showConfirmButton: false,
                      denyButtonText: `Đăng xuất`,
                    }).then((result) => {
                      if (result.isDenied) {
                        logout();
                        window.location.reload();
                      }
                    });
                  }}
                >
                  Đăng xuất
                </button>
              </div>
              <div className='col-xs-12 col-sm-12 col-lg-9  ps-0'>
                {/* name */}
                <div className='row mt-3 align-items-center'>
                  <div className='col-3'>
                    <span className='fw-bold'>Họ và tên</span>
                  </div>
                  <div className='col'>
                    <input
                      type='text'
                      className='form-control mb-3'
                      defaultValue={`${userLoggedin.firstName} ${userLoggedin.lastName}`}
                    />
                  </div>
                </div>
                {/* date of birth */}
                <div className='row mt-3 align-items-center'>
                  <div className='col-3'>
                    <span className='fw-bold'>Ngày sinh</span>
                  </div>
                  <div className='col'>
                    <select
                      name=''
                      id='day'
                      className=' w-25 border border-dark me-3 btn'
                      style={{ fontSize: '0.8rem' }}
                    >
                      <option selected value='2'>
                        02
                      </option>
                      {dayRange.map((day) => (
                        <option value={day}>{day}</option>
                      ))}
                    </select>

                    <select
                      name=''
                      id='month'
                      className=' w-25 border border-dark me-3 btn'
                      style={{ fontSize: '0.8rem' }}
                    >
                      {monthRange.map((month) => (
                        <option value={month}>{month}</option>
                      ))}
                    </select>

                    <select
                      name=''
                      id='year'
                      className=' w-25 border border-dark me-3 btn '
                      style={{ fontSize: '0.8rem' }}
                    >
                      <option selected value=''>
                        2002
                      </option>
                      {yearRange.map((year) => (
                        <option value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* gender */}
                <div className='row mt-3 align-items-center'>
                  <div className='col-3'>
                    <span className='fw-bold'>Giới Tính</span>
                  </div>
                  <div className='col'>
                    <div className='form-check ps-0'>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                        checked
                      />
                      <label
                        htmlFor='flexRadioDefault1'
                        className=' me-3 px-2 py-4'
                      >
                        Nam
                      </label>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault2'
                      />
                      <label
                        htmlFor='flexRadioDefault2'
                        className=' me-3 px-2 py-4'
                      >
                        Nữ
                      </label>
                      <input
                        type='radio'
                        name='flexRadioDefault'
                        id='flexRadioDefault3'
                      />
                      <label
                        htmlFor='flexRadioDefault3'
                        className=' me-3 px-2 py-4'
                      >
                        Khác
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row mt-3 ms-2'>
                  <button className='btn btn-outline-primary w-100'>
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='right-col col-xs-12 col-sm-12 col-lg-6 col-xl-6 '>
            <h6>Số điện thoại và Email</h6>
            <div className='row align-items-center'>
              <div className='col'>
                <div className='row my-2'>
                  <div className='col d-flex'>
                    <i
                      className='fas fa-phone fs-5 mt-3'
                      style={{ color: 'var(--icon-collor--)' }}
                    ></i>
                    <div className='ms-4'>
                      <span className='fw-bold'>Số điện thoại</span>
                      <input
                        className='d-block border-0 form-control p-0'
                        defaultValue={userLoggedin.phoneNumber}
                        type='text'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3'>
                <button className='btn btn-outline-primary w-75'>
                  Cập nhật
                </button>
              </div>
            </div>
            <div className='row align-items-center mt-3'>
              <div className='col'>
                <div className='row my-2'>
                  <div className='col d-flex'>
                    <i
                      className='fa-solid fa-envelope fs-5 mt-3'
                      style={{ color: 'var(--icon-collor--)' }}
                    ></i>
                    <div className='ms-4'>
                      <span className='fw-bold'>Địa chỉ email</span>
                      <input
                        className='d-block border-0 form-control  p-0'
                        defaultValue={userLoggedin.email}
                        type='email'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3'>
                <button className='btn btn-outline-primary w-75'>
                  Cập nhật
                </button>
              </div>
            </div>
            <h6 className='mt-3'>Bảo mật</h6>
            <div className='row align-items-center'>
              <div className='col'>
                <div className='row mt-2'>
                  <div className='col d-flex'>
                    <i
                      className='fas fa-lock fs-5'
                      style={{ color: 'var(--icon-collor--)' }}
                    ></i>
                    <div className='ms-4'>
                      <span className='fw-bold'>Mật Khẩu</span>
                      <input
                        className='d-block border-0 form-control p-0'
                        defaultValue={userLoggedin.password}
                        type='password'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-3'>
                <button className='btn btn-outline-primary w-75'>
                  Cập nhật
                </button>
              </div>
            </div>
            <h6 className='mt-3'>Địa chỉ </h6>
            <div className='row align-items-center'>
              <div className='col'>
                <textarea
                  className='form-control '
                  cols='7'
                  rows='4'
                  defaultValue={userLoggedin.address}
                ></textarea>
              </div>
              <div className='col-sm-12 col-lg-3 mt-2'>
                <button className='btn btn-outline-primary w-75'>
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
