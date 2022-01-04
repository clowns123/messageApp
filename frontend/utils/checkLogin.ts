const isLogin = () => {
	if(sessionStorage.getItem('login_session')){
		return true;
	}
	return false;
};

export default isLogin;
