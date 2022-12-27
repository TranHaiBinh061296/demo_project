import { React, useState, useEffect } from 'react';
import AdminSidebar from './../SideBar/AdminSidebar';
import AdminInfo from './../adminInfo/AdminInfo';
import categoryService from '../../../service/categoryService';

import Swal from 'sweetalert2';

function Category() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState();
  const [categoryDescription, setCategoryDescription] = useState();
  const [isEditForm, setIsEditForm] = useState(false);

  const loadCategory = () => {
    categoryService
      .getAllCategories()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const editHandlder = (id) => {
    setCategoryId(id);
    categoryService
      .getOneCategory(id)
      .then((response) => {
        setCategoryName(response.data.data.name);
        setCategoryDescription(response.data.data.description);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  const deleteHandlder = (id) => {
    categoryService
      .deleteCategory(id)
      .then((res) => {
        loadCategory();
        console.log(res.data);
        if (res.data.status === 'OK') {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Đã xóa thành công!',
            showConfirmButton: false,
            timer: 1000,
          });
          loadCategory();
        } else {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Không thể xóa Doanh mục vì có chứa sản phẩm!',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  const updateCate = (id) => {
    const categoryUpdate = {
      name: categoryName,
      description: categoryDescription,
    };
    categoryService
      .updateCategory(id, categoryUpdate)
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Cập nhật thành công!',
          showConfirmButton: false,
          timer: 1000,
        });
        loadCategory();
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  const addNewPro = () => {
    const newPro = {
      name: categoryName,
      description: categoryDescription,
    };
    categoryService
      .addCategory(newPro)
      .then((res) => {
        console.log(`res: ${res}`);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Đã Thêm Doanh Mục Mới',
          showConfirmButton: false,
          timer: 1000,
        });
        loadCategory();
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  return (
    <>
      <div className='adminForm'>
        <AdminSidebar />
        <div className='adminContainer'>
          <div className='adminContent'>
            {/* nav */}
            <nav className='d-flex justify-content-between align-items-center'>
              <h4>
                <i className='fa-solid fa-shirt'></i> Sản Phẩm / Doanh Mục
              </h4>
              <AdminInfo />
            </nav>
            {/* add button */}
            <div className='d-flex my-4'>
              <button
                className='ms-auto btn btn-success'
                data-bs-toggle='modal'
                data-bs-target='#addCategory'
                onClick={() => {
                  setCategoryName('');
                  setCategoryDescription('');
                  setIsEditForm(false);
                }}
              >
                <i className='fa-solid fa-plus me-2'></i>
                Thêm Doanh mục
              </button>
            </div>

            {/* table */}
            <table className='table mt-4 tableProduct align-middle text-center table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên</th>
                  <th>Mô Tả</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cate) => (
                  <tr key={cate.id}>
                    <td>{cate.id}</td>
                    <td>{cate.name}</td>
                    <td>{cate.description}</td>
                    <td>
                      <button
                        className='option-btn'
                        data-bs-toggle='modal'
                        data-bs-target='#addCategory'
                        onClick={() => {
                          editHandlder(cate.id);
                          setIsEditForm(true);
                        }}
                      >
                        <i className='fa-solid fa-pen-to-square'></i>
                      </button>

                      <button
                        className='option-btn'
                        onClick={function () {
                          Swal.fire({
                            title: `Bạn có chắc muốn xóa doanh mục ${cate.name} chứ???`,
                            showDenyButton: true,
                            confirmButtonText: 'Xóa',
                            denyButtonText: `Đóng`,
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteHandlder(cate.id);
                              Swal.fire({
                                title: `Đã xóa ${cate.name}`,
                                icon: 'success',
                              });
                            }
                          });
                        }}
                      >
                        <i className='fa-solid fa-trash text-danger'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className='modal fade'
        id='addCategory'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Thêm Doanh Mục
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div>
                <label htmlFor='doanhMuc' className='d-block'>
                  Tên Doanh Mục
                </label>
                <input
                  id='doanhMuc'
                  type='text'
                  className='w-100'
                  maxLength='50'
                  value={categoryName === undefined ? '' : categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                />
              </div>
              <div className='mt-4'>
                <label htmlFor='descr' className='d-block'>
                  Mô tả
                </label>
                <textarea
                  id='descr'
                  className='w-100'
                  rows='6'
                  value={
                    categoryDescription === undefined ? '' : categoryDescription
                  }
                  onChange={(e) => {
                    setCategoryDescription(e.target.value);
                  }}
                ></textarea>
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
              {!isEditForm ? (
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => addNewPro()}
                  data-bs-dismiss='modal'
                >
                  Thêm Doanh Mục
                </button>
              ) : (
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => updateCate(categoryId)}
                  data-bs-dismiss='modal'
                >
                  Lưu Thay Đổi
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
