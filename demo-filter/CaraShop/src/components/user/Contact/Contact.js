import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Penguin from '../PenGuin/Penguin';
import './contact.css';
import './mobile.css';

function Contact() {
  return (
    <>
      <Header />
      {/* banner */}
      <div className='mt-4'>
        <h3 className='text-center align-items-center animate-charcter'>
          Chào Mừng đến với <br></br>
          <img
            src={require('../../../assets/img/logo.png')}
            alt='logo name'
            className='my-3 p-0'
          ></img>
          <br></br>
          Chúng tôi rất vui khi nghe ý kiến đóng góp của bạn
        </h3>
        <Penguin />
      </div>
      {/* map */}
      <section id='contact-detail' className='row px-4'>
        <div className='details col-sm-12 col-md-6 col-lg-6'>
          <h2>Liên Hệ Với Chung Tôi</h2>
          <h3>Trụ Sở Chính</h3>
          <div>
            <li>
              <i className='fa-solid fa-map-location-dot'></i>
              <p>Công Viên Phần Mềm Quang Trung, Quận 12, Tp HCM</p>
            </li>
            <li>
              <i className='fa-solid fa-envelope'></i>
              <p>CaraShop@gmail.com</p>
            </li>
            <li>
              <i className='fa-solid fa-phone-alt'></i>
              <p>0324668445 - 0337745123</p>
            </li>
            <li>
              <i className='fa-solid fa-clock'></i>
              <p>Thứ 2 đến Thứ 7: 9:00am - 16:00pm</p>
            </li>
          </div>
        </div>

        <div className='map col-sm-12 col-md-6 col-lg-6'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.76965430165!2d106.6808529182975!3d10.775176558623343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649309197480!5m2!1svi!2s'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
          ></iframe>
        </div>
      </section>

      {/* form contact */}
      <section id='form-details' className='row'>
        <form action='' className='col-sm-12 col-md-8 col-lg-8'>
          <span>ĐÓNG GÓP Ý KIẾN</span>
          <h2>Gửi Phản Hồi Cho Chúng Tôi :3 </h2>
          <input type='text' placeholder='Tên' />
          <input type='text' placeholder='E-mail' required />

          <textarea
            placeholder='Ý Kiến Của Bạn'
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button className='normal'>Gửi</button>
        </form>

        <div className='people col-sm-12 col-md-4 col-lg-4'>
          <div>
            <img src={require('../../../assets/img/people/1.png')} alt='' />
            <p>
              <span>Nguyễn Vạn Phi</span>{' '}
              <strong>Chủ Tịch Hội Đồng Quản Trị</strong> <br />
              Phone: +84 12345678 <br />
              Email: nvanphi@gmail.com
            </p>
          </div>

          <div>
            <img src={require('../../../assets/img/people/2.png')} alt='' />
            <p>
              <span>Hoàng Hữu Nghĩa</span> <strong> Giám Đốc Điều Hành</strong>{' '}
              <br />
              Phone: +84 223456789 <br />
              Email: hhnghia@gmail.com
            </p>
          </div>

          <div>
            <img src={require('../../../assets/img/people/3.png')} alt='' />
            <p>
              <span>Nguyễn Thành Luân</span> <strong>Bảo Vệ</strong> <br />
              Phone: +84 77689383927 <br />
              Email: ntluan@gmail.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
