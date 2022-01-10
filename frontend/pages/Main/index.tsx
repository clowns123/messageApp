import useLogout from '@utils/useLogout';
import React from 'react';

const Main = () => {
  const logout = useLogout();
  return (
    <>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default Main;
