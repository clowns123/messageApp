import React, { useEffect } from 'react';
import Login from '@pages/Login';
import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import checkLogin from '@utils/checkLogin';
import NotFound from '@pages/NotFound';

const App = () => {
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
