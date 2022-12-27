import AdminSidebar from "./../SideBar/AdminSidebar";
import AdminInfo from "./../adminInfo/AdminInfo";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../service/userService";

function AccountManagement() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    getAllUser()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="adminForm">
        <AdminSidebar />
        <div className="adminContainer">
          <div className="adminContent">
            {/* nav */}
            <nav className="d-flex justify-content-between align-items-center">
              <h4>
                <i className="fa-solid fa-user me-2"></i>Khách Hàng / Quản lí
                khách hàng
              </h4>
              <AdminInfo />
            </nav>
            {/* search */}
            <div className="d-flex align-items-baseline">
              <div className="searchGroup mt-3 w-25">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="ms-2 w-80 p-0"
                  placeholder="Nhập họ, tên khách hàng."
                />
              </div>
            </div>
            {/* table */}
            <table className="table mt-3 table-hover text-center align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.address}</td>
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

export default AccountManagement;
