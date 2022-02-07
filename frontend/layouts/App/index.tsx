import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import checkLogin from '@utils/checkLogin';
import loadable from '@loadable/component';
import { useRecoilState } from 'recoil';
import { loginState } from '@atoms/loginState';

const WorkSpace = loadable(() => import('@layouts/WorkSpace'));
const Login = loadable(() => import('@pages/Login'));

const App = () => {
  const [isLogin, _] = useRecoilState(loginState);
  useEffect(() => {
    console.log("ghkdxogus isLogin ", isLogin);
  }, [isLogin])
  return (
      <Routes>
        {isLogin ? (
          <>
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
