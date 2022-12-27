import './footer.css';

function Footer() {
  return (
    <>
      <div className='container mt-5 footer'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-3 mt-4'>
            <img
              className='logo'
              src={require('../../../assets/img/logo.png')}
              alt=''
            />

            <p>
              <strong>Địa chỉ:</strong> Công viên Phần mềm Quang Trung,
              <br /> Đường Số 5, Tân Hưng Thuận, Quận 12,
              <br /> Thành phố Hồ Chí Minh 700000, Vietnam
              <br />
            </p>
            <p>
              <strong>Điện thoại:</strong> 0867876112 / 0377820671
              <br />
            </p>
            <p>
              <strong>Giờ mở cửa:</strong> 10: 00 - 18:00, Thứ 2 - Thứ 7
            </p>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-3 mt-4'>
            <h4>Thông tin</h4>
            <a href='#'>Về chúng tôi</a>
            <a href='#'>Thông tin giao hàng</a>
            <a href='#'>Chính sách bảo mật</a>
            <a href='#'>Điều khoản & Điều kiện</a>
            <a href='#'>Liên hệ chúng tôi</a>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-3 mt-4'>
            <h4>Tài khoản của tôi</h4>
            <a href='#'>Đăng nhập</a>
            <a href='#'>Xem giỏ hàng</a>
            <a href='#'>Sản phẩm yêu thích</a>
            <a href='#'>Theo dõi đơn hàng</a>
            <a href='#'>Trợ giúp</a>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-3 mt-4 follow'>
            <h4>Theo dõi chúng tôi</h4>
            <div className='icon'>
              <i className='fa-brands fa-facebook-f'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-linkedin-in'></i>
              <i className='fa-brands fa-youtube'></i>
              <i className='fa-brands fa-tiktok'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>@ 2022, Vạn Phi - Hữu Nghĩa - Thành Luân</p>
      </div>
    </>
  );
}

export default Footer;
