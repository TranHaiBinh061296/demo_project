import Penguin from '../user/PenGuin/Penguin';
import './Deny.css';
import { useNavigate } from 'react-router-dom';
export default function Deny() {
  let navigate = useNavigate();
  return (
    <div className='denyPage'>
      <h1 className='denyNotification'>
        Chỉ Admin mới có thể vào trang quản trị
      </h1>
      <h2 className='denyNotification'>Xin lỗi quý khách vì sự bất tiện này</h2>
      <Penguin />
      <button className='btn btn-secondary' onClick={() => navigate('/login')}>
        Quay lại
      </button>
    </div>
  );
}
