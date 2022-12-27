import '../Login/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import loginSignupService from '../../service/loginSignupService';
import Swal from 'sweetalert2';

const NAME_REGEX = /[^0-9!@#$%^&*()]{2,22}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function Signup() {
  const firstNameRef = useRef();
  
  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);



  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);

  const [address, setAddress] = useState('');

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const [cfmPassword, setCfmPassword] = useState('');
  const [validcfmPassword, setValidcfmPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setValidFirstName(NAME_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhoneNumber(phoneNumber.length >= 10);
  }, [phoneNumber]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidcfmPassword(password === cfmPassword);
  }, [password, cfmPassword]);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password === cfmPassword) {
      let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        pw: password,
      };

      console.log(newUser);

      loginSignupService
        .signup(newUser)
        .then((response) => {
          console.log(response);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Đăng Ký Tài Khoản Thành Công',
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/login');
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (err) {
          console.log('err: ' + err);
        });
    } else {
      console.log('password invalid');
    }
  };
  return (
    <>
      <div id='loginWrapper'>
        <div id='loginForm'>
          <div className='loginNav'>
            <Link to='/login'>Đăng Nhập</Link>
            <Link to='/signup'>Đăng Ký</Link>
          </div>
          <form action='/login' onSubmit={signupHandler}>
            <div className='inputGroup'>
              <label htmlFor='lastName'>
                Họ:
                <h6>
                  <span
                    className={
                      validFirstName || !firstName ? 'd-none' : 'd-block'
                    }
                  >
                    <i className='fa-solid fa-xmark'></i>Không hợp lệ
                  </span>
                  <span className={validFirstName ? 'd-block' : 'd-none'}>
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='firstName'
                className='form-control'
                ref={firstNameRef}
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                aria-invalid={validFirstName ? 'false' : 'true'}
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                required
              />
            </div>

            <div className='inputGroup'>
              <label htmlFor='firstName'>
                Tên:
                <h6>
                  <span
                    className={
                      validLastName || !lastName ? 'd-none' : 'd-block'
                    }
                  >
                    <i className='fa-solid fa-xmark'></i>Không hợp lệ (nhiều hơn
                    1 kí tự)
                  </span>
                  <span className={validLastName ? 'd-block' : 'd-none'}>
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='lastName'
                className='form-control'
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>

            <div className='inputGroup'>
              <label htmlFor='email'>
                Email:
                <h6>
                  <span className={validEmail || !email ? 'd-none' : 'd-block'}>
                    <i className='fa-solid fa-xmark'></i>Email Không hợp lệ
                  </span>
                  <span className={validEmail ? 'd-block' : 'd-none'}>
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='email'
                className='form-control'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className='inputGroup'>
              <label htmlFor='phoneNumber'>
                Số điện thoại:
                <h6>
                  <span
                    className={
                      validPhoneNumber || !phoneNumber ? 'd-none' : 'd-block'
                    }
                  >
                    <i className='fa-solid fa-xmark'></i>Không hợp lệ
                  </span>
                  <span className={validPhoneNumber ? 'd-block' : 'd-none'}>
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='phoneNumber'
                className='form-control'
                type='tel'
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
              />
            </div>


            <div className='inputGroup'>
              <label htmlFor='address'>
               Địa chỉ:
              </label>
              <textarea
                id='address'
                className='form-control'
                type='text'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              ></textarea>
            </div>

            <div className='inputGroup'>
              <label htmlFor='password'>
                Mật khẩu:
                <h6>
                  <span
                    className={
                      validPassword || !password ? 'd-none' : 'd-block'
                    }
                  >
                    <i className='fa-solid fa-xmark'></i> ít nhất 8 kí tự (bao
                    gồm chữ & số)
                  </span>
                  <span className={validPassword ? 'd-block' : 'd-none'}>
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='password'
                className='form-control'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>

            <div className='inputGroup'>
              <label htmlFor='passwordConfirm'>
                Nhập lại mật khẩu:
                <h6>
                  <span
                    className={
                      validcfmPassword || !cfmPassword ? 'd-none' : 'd-block'
                    }
                  >
                    <i className='fa-solid fa-xmark'></i> Không đúng
                  </span>
                  <span
                    className={
                      validcfmPassword && cfmPassword ? 'd-block' : 'd-none'
                    }
                  >
                    <i className='fa-solid fa-check text-success fs-5'></i>
                  </span>
                </h6>
              </label>
              <input
                id='passwordConfirm'
                className='form-control'
                type='password'
                onChange={(e) => setCfmPassword(e.target.value)}
                value={cfmPassword}
                required
              />
            </div>

            <button className='signinBtn'>Đăng Ký</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
