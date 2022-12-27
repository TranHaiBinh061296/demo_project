import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './components/user/Home/Home';
import Contact from './components/user/Contact/Contact';
import Cart from './components/user/Cart/Cart';
import Women from './components/user/Women/Women';
import Men from './components/user/Men/Men';
import Kids from './components/user/Kids/Kids';
import Baby from './components/user/Baby/Baby';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AdminDashboard from './components/admin/AdminDashboard/AdminDashboard';
import ProductManagement from './components/admin/ProductManagement/ProductManagement.js';
import Product from './components/user/Product/Product';
import UserInfo from './components/user/UserInfo/UserInfo.js';
import Statistical from './components/admin/Statistical/Statistical';
import AccountManagement from './components/admin/AccountManagement/AccountManagement';
import OrderManagement from './components/admin/OrderManagement/OrderManagement';
import Category from './components/admin/category/Category';
import Deny from './components/DenyPage/Deny';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let loginUser = localStorage.getItem('loginUser');
    if (loginUser) {
      setIsLogin(true);
      let userLoggedin = JSON.parse(loginUser);
      if (userLoggedin.isAdmin === true) {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/women' element={<Women />} />
      <Route path='/men' element={<Men />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/kids' element={<Kids />} />
      <Route path='/baby' element={<Baby />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/userInfo' element={isLogin ? <UserInfo /> : <Login />} />
      <Route path='/products/:id' element={<Product />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/admin' element={isAdmin ? <AdminDashboard /> : <Deny />} />
      <Route
        path='/productManagement'
        element={isAdmin ? <ProductManagement /> : <Deny />}
      />
      <Route
        path='/statistical'
        element={isAdmin ? <Statistical /> : <Deny />}
      />
      <Route
        path='/accountManagement'
        element={isAdmin ? <AccountManagement /> : <Deny />}
      />
      <Route
        path='/orderManagement'
        element={isAdmin ? <OrderManagement /> : <Deny />}
      />
      <Route path='/category' element={isAdmin ? <Category /> : <Deny />} />
    </Routes>
  );
}

export default App;
