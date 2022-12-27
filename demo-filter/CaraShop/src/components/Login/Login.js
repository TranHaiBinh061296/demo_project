import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import loginSignupService from '../../service/loginSignupService';
import Swal from 'sweetalert2';

function Login() {
  let navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMess, setErrMess] = useState('');



  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);



  const forgetPass = async (e) => {
    const { value: email } = await Swal.fire({
      title: 'Lấy Lại Mật Khẩu',
      input: 'email',
      inputLabel: 'Nhập địa chỉ email để lấy lại mật khẩu',
      inputPlaceholder: 'email@gmail.com',
    });

    if (email) {
      Swal.fire(`Mã xác nhận đã gửi đến địa chỉ email: ${email}`);
    }
  };

  const saveCurrentUser = async (u) => {
    localStorage.setItem(
      'loginUser',
      JSON.stringify({
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        phoneNumber: u.phoneNumber,
        address: u.address,
        password: u.pw,
        isAdmin: u.isAdmin,
      })
    );
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    let user = new URLSearchParams({
      email: email,
      password: password,
    });

    loginSignupService
      .login(user)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Đăng Nhập Thành Công!',
            showConfirmButton: false,
            timer: 700,
          });
        } else {
          setErrMess(`*Sai email hoặc mật khẩu`);
          console.log(`Login faile`);
        }
        return response.json();
      })
      .then((data) => {
        loginSignupService.getUser(data.data.id).then((res) => {
          saveCurrentUser(res.data.data);
          if(res.data.data.isAdmin){
            navigate('/admin')
          }else{
            navigate('/userInfo')
          }
          
          setTimeout(window.location.reload(),1000)

        });
        
        
      })
      .catch(function (err) {
        console.error('err: ' + err);
      });
  };

  return (
    <>
      <div id='loginWrapper'>
        <div id='loginForm'>
          <div className='loginNav'>
            <Link to='/login'>Đăng Nhập</Link>
            <Link to='/signup'>Đăng Ký</Link>
          </div>
          <span className='d-block mt-3 text-danger fw-bold'>{errMess}</span>
          <form onSubmit={loginHandler} readOnly>
            <div className='inputGroup'>
              <input
                id='email'
                placeholder='Nhập email'
                ref={emailRef}
                type='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </div>

            <div className='inputGroup'>
              <input
                id='password'
                placeholder='Mật Khẩu'
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button className='loginBtn'>Đăng Nhập</button>
          </form>
          <div className='loginFooter'>
            <button className='forgetPass' onClick={forgetPass}>
              Quên Mật Khẩu?
            </button>
          </div>
        </div>
      </div>
      s
    </>
  );
}

export default Login;
