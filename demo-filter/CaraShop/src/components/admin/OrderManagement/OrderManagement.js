import AdminSidebar from './../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';
export default function OrderManagement() {
  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-cart-shopping me-2'></i>Đơn Hàng /
                Quản Lí Đơn Hàng
              </h4>
              <AdminInfo />
            </nav>
            {/* search */}
            <div className='searchGroup mt-3 w-25'>
              <i className='fa-solid fa-magnifying-glass'></i>
              <input
                type='text'
                className='ms-2 w-80 p-0'
                placeholder='Nhập ID khách hàng'
              />
            </div>
            {/* table */}
            <table className='table mt-3 table-hover text-center align-middle'>
              <thead>
                <tr>
                  <th>Tên khách hàng</th>
                  <th>Mã đơn hàng</th>
                  <th>Tổng hóa đơn</th>
                  <th>Ngày</th>
                  <th>Tình trạng</th>
                </tr>
              </thead>
              <tbody>
                <tr data-bs-toggle='modal' data-bs-target='#orderDetail1'>
                  <td>Nguyễn Vạn Phi</td>
                  <td>000101</td>
                  <td>120.000</td>
                  <td>25/05/2022</td>
                  <td>
                    <span className='btn btn-success' style={{ width: '8rem' }}>
                      Hoàn tất
                    </span>
                  </td>
                </tr>
                <tr data-bs-toggle='modal' data-bs-target='#orderDetail2'>
                  <td>Hoàng Hữu Nghĩa</td>
                  <td>000102</td>
                  <td>220.000</td>
                  <td>02/05/2022</td>
                  <td>
                    <span className='btn btn-warning' style={{ width: '8rem' }}>
                      Đang giao
                    </span>
                  </td>
                </tr>
                <tr data-bs-toggle='modal' data-bs-target='#orderDetail3'>
                  <td>Nguyễn Thành Luân</td>
                  <td>000103</td>
                  <td>320.000</td>
                  <td>02/06/2022</td>
                  <td>
                    <span className='btn btn-warning' style={{ width: '8rem' }}>
                      Đang giao
                    </span>
                  </td>
                </tr>
                <tr data-bs-toggle='modal' data-bs-target='#orderDetail4'>
                  <td>Nguyễn Tiến Thành</td>
                  <td>000104</td>
                  <td>320.000</td>
                  <td>02/08/2022</td>
                  <td>
                    <span className='btn btn-success' style={{ width: '8rem' }}>
                      Hoàn tất
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal order detail*/}
      <div
        class='modal fade'
        id='orderDetail1'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog  modal-lg modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Chi tiết hóa đơn
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <h5>Tên khách hàng: Nguyễn Vạn Phi</h5>
              <h6>Địa chỉ: Trung Mĩ Tây, Quận 12, Tp HCM</h6>
              <h6>Mã Đơn hàng: 000101</h6>
              <table className='table'>
                <thead>
                  <tr>
                    <td>Tên Sản phẩm</td>
                    <td>số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Áo khoác nam</td>
                    <td>1</td>
                    <td>60.000</td>
                    <td>60.000</td>
                  </tr>
                  <tr>
                    <td>Quần thể thao</td>
                    <td>2</td>
                    <td>30.000</td>
                    <td>60.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Tổng hóa đơn</td>
                    <td>120.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal2 */}
      <div
        class='modal fade'
        id='orderDetail2'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog  modal-lg modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Chi tiết hóa đơn
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <h5>Tên khách hàng: Hoàng Hữu Nghĩa</h5>
              <h6>Địa chỉ: 121, Củ Chi, Tp HCM</h6>
              <h6>Mã Đơn hàng: 000102</h6>
              <table className='table'>
                <thead>
                  <tr>
                    <td>Tên sản phẩm</td>
                    <td>so luong</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Áo khoác nam</td>
                    <td>1</td>
                    <td>97.000</td>
                    <td>97.000</td>
                  </tr>
                  <tr>
                    <td>Quần thể thao</td>
                    <td>1</td>
                    <td>97.000</td>
                    <td>97.000</td>
                  </tr>
                  <tr>
                    <td>Quần Kaki</td>
                    <td>1</td>
                    <td>26.000</td>
                    <td>26.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Tổng hóa đơn</td>
                    <td>220.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal 3 */}

      <div
        class='modal fade'
        id='orderDetail3'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog  modal-lg modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Chi tiết hóa đơn
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <h5>Tên khách hàng: Nguyễn Thành Luân</h5>
              <h6>Địa chỉ: 799, Tân Quới, Bình Tân, Vĩnh Long</h6>
              <h6>Mã Đơn hàng: 000103</h6>
              <table className='table'>
                <thead>
                  <tr>
                    <td>Tên sản phẩm</td>
                    <td>số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Áo thun trơn</td>
                    <td>1</td>
                    <td>90.000</td>
                    <td>90.000</td>
                  </tr>
                  <tr>
                    <td>Quần jean</td>
                    <td>1</td>
                    <td>120.000</td>
                    <td>120.000</td>
                  </tr>
                  <tr>
                    <td>Áo sơ mi dài tay</td>
                    <td>1</td>
                    <td>70.000</td>
                    <td>70.000</td>
                  </tr>
                  <tr>
                    <td>Áo thun ngắn</td>
                    <td>1</td>
                    <td>40.000</td>
                    <td>40.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Tổng hóa đơn</td>
                    <td>320.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal 4 */}
      <div
        class='modal fade'
        id='orderDetail4'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog  modal-lg modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Chi tiết hóa đơn
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <h5>Tên khách hàng: Nguyễn Tiến Thành</h5>
              <h6>Địa chỉ: 133, Tân Chánh Hiệp, Quận 12, Tp HCM</h6>
              <h6>Mã Đơn hàng: 000104</h6>
              <table className='table'>
                <thead>
                  <tr>
                    <td>Tên sản phẩm</td>
                    <td>số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Áo thun micky</td>
                    <td>2</td>
                    <td>60.000</td>
                    <td>120.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Tổng hóa đơn</td>
                    <td>120.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
