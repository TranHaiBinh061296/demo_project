import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './home.css';
import './mobile.css';
// import '../../../assets/css/user/styleMobile.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Header />
      {/* advertisement 1 */}
      <section className='product-ads ads1'>
        <h2>Siêu Ưu Đãi</h2>
        <h1>Tất cả các mặt hàng</h1>
        <p>Tiết kiệm hơn với vô vàn mã giảm giá lên đến 70%</p>
        <Link to='/women'>Mua ngay</Link>
      </section>
      {/* advertisement 2 */}

      <section className='product-ads ads2'>
        <h2> Ưu Đãi</h2>
        <h1>Mua 1 Tặng 1</h1>
        <p>Chiếc Váy cổ điển hot nhất đang được bán tại Cara</p>
        <Link to='/women'>Mua ngay</Link>
      </section>

      {/* advertisement 3 */}

      <section className='product-ads ads3'>
        <h2> Ưu Đãi Theo Mùa</h2>
        <h1>Mua 1 Tặng 1</h1>
        <p>Quần áo trending theo mùa đang được bán bởi Cara</p>
        <Link to='/women'>Mua ngay</Link>
      </section>

      {/* advertisement 4 */}

      <section className='product-ads ads4'>
        <h2> Ưu Đãi Theo Mùa</h2>
        <h1>Mua 1 Tặng 1</h1>
        <p>Quần áo trending theo mùa đang được bán bởi Cara</p>
        <Link to='/women'>Mua ngay</Link>
      </section>

      {/* advertisement 5 */}

      <section className='product-ads ads5'>
        <h2> Ưu Đãi Theo Mùa</h2>
        <h1>Mua 1 Tặng 1</h1>
        <p>Quần áo trending theo mùa đang được bán bởi Cara</p>
        <Link to='/women'>Mua ngay</Link>
      </section>

      {/* banner 3 */}
      <section id='banner3' style={{ marginTop: '1rem' }}>
        <div className='banner-box'>
          <h2>Thời trang mùa Thu</h2>
          <h3>Bộ sưu tập mùa Thu giảm tới 50%</h3>
        </div>

        <div className='banner-box banner-box2'>
          <h2>Thời trang mùa Đông</h2>
          <h3>Bộ sưu tập mùa đông giảm đến 50%</h3>
        </div>

        <div className='banner-box banner-box3'>
          <h2>Thời trang mùa Xuân</h2>
          <h3>Bộ sưu tập mùa Xuân giảm giá lên đến 50%</h3>
        </div>
      </section>

      {/* email */}

      <section id='newsletter' className='section section-m1'>
        <div className='newstext'>
          <h4>Đăng kí để nhận thông tin mới nhất</h4>
          <p>
            Nhận thông báo qua email về những ưu đãi
            <span> Đặt biệt</span>.
          </p>
        </div>
        <div className='form'>
          <input type='text' placeholder='nguyenvanA@gmail.com' />
          <button className='normal'>Đăng Ký</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
