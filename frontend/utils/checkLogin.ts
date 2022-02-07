const checkLogin = () => {
  if (sessionStorage.getItem('login_session')) {
    return true;
  }
  return false;
};

export default checkLogin;
