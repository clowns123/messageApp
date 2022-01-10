const checkLogin = () => {
  console.log(sessionStorage.getItem('login_session'));
  if (sessionStorage.getItem('login_session')) {
    return true;
  }
  return false;
};

export default checkLogin;
