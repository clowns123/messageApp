import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router';
import NotFound from '@pages/NotFound';
import checkLogin from '@utils/checkLogin';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/loginState';
import loadable from '@loadable/component';

const WorkSpace = loadable(() => import('@layouts/WorkSpace'));
const Login = loadable(() => import('@pages/Login'));

const App = () => {
  const navigate = useNavigate();
  const [isLogin, _] = useRecoilState(loginState);

  useEffect(() => {
    navigate('/');
    console.log("ghkdxogus login check");
  }, [isLogin]);

  return (
      <Routes>
        {checkLogin() ? (
          <>
            <Route path="/" element={<WorkSpace />} />
            <Route path="/workspace/*" element={<WorkSpace />} />
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
