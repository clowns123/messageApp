import React, { useEffect, useState } from 'react';
import { LoginContent, Logo, Wrapper } from './styled';
import { GoogleLogin } from 'react-google-login';
import useLogout from '@utils/useLogout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userInfoData } from '@atoms/userInfo';
import { loginState } from '@atoms/loginState';

const Login = () => {
  const [_, setUserInfo] = useRecoilState(userInfoData);
  const setLogin = useSetRecoilState(loginState);

  const [userObj, setUserObj] = useState({
    name: '',
    email: '',
    access_token: '',
    imageUrl: '',
  });

  const navigate = useNavigate();
  useEffect(() => {
    setUserInfo(userObj);
  }, [userObj]);

  const responeGoogle = async (res: any) => {
    if (res.error) {
      console.error(res.error);
      return;
    }

    const { name = '', email = '', access_token = '', imageUrl = '' } = { ...res.profileObj, ...res.tokenObj };
    const loginInfo = { name, email, token: access_token, imageUrl };
    setUserObj({ name, email, access_token, imageUrl });

    const regEmail = /@rsupport.com/;
    if (!regEmail.test(email)) {
      alert('rsupport 이메일로 로그인해주세요');
      return;
    }

    sessionStorage.setItem('login_session', JSON.stringify(loginInfo));
    navigate('/workspace');
    setLogin(true);
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
