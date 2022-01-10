import React, { useEffect, useState } from 'react';
import Login from '@pages/Login';
import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import { useNavigate } from 'react-router';
import NotFound from '@pages/NotFound';
import checkLogin from '@utils/checkLogin';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/loginState';

const App = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  useEffect(() => {
    console.log('isLogin : ', isLogin);
    navigate('/');
  }, [isLogin]);
  return (
    <Routes>
      {checkLogin() ? (
        <>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
