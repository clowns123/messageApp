import React, { useEffect, useState } from 'react';
import { LoginContent, Logo, Wrapper } from './styled';
import { GoogleLogin } from 'react-google-login';
import { onLogout } from '@utils/logout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    console.log(sessionStorage.getItem('login_session'));
  }, [])
  const [userObj, setUserObj] = useState({
    name: '',
    email: '',
    access_token: '',
    imageUrl: '',
  });
  const navigate = useNavigate();
  const responeGoogle = async (res: any) => {
    if (res.error) {
      console.error(res.error);
      return;
    }

    const { name = '', email = '', access_token = '', imageUrl = '' } = { ...res.profileObj, ...res.tokenObj };
    const loginInfo = { name, email, token: access_token, imageUrl };
    console.log(loginInfo);

    const regEmail = /@rsupport.com/;
    if (!regEmail.test(email)) {
      alert('rsupport 이메일로 로그인해주세요');
      onLogout();
      return;
    }

    try {
      const res = await axios.post(`${process.env.BACK_URL}users/add`, {
        ...loginInfo,
      });
      console.log(res);
    } catch (error) {}
    sessionStorage.setItem('login_session', JSON.stringify(loginInfo));
    navigate('/main')
  };

  return (
    <Wrapper>
      <Logo />
      <LoginContent>
        <GoogleLogin
          clientId={'32155834743-m1c9gdk1q4dl9lcnqnendul1eb0q3pho.apps.googleusercontent.com'}
          buttonText="알서포트 이메일로 로그인"
          onSuccess={(result) => responeGoogle(result)}
          onFailure={(result) => responeGoogle(result)}
          cookiePolicy={'single_host_origin'}
        />
      </LoginContent>
    </Wrapper>
  );
};

export default Login;
