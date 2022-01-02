import React from 'react';
import { LoginContent, Logo, Wrapper } from './styled';
import GoogleLogin from 'react-google-login';

const Login = () => {
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = React.useState({
    email: '',
    name: '',
  });
  console.log(JSON.stringify(process.env.CLIENT_ID));

  //로그인 성공시 res처리
  const onLoginSuccess = (res: any) => {
    console.log('onLoginSuccess : ', res);
    setUserObj({ ...userObj, email: res.profileObj.email, name: res.profileObj.name });
  };

  return (
    <Wrapper>
      <Logo />
      <LoginContent>
        <GoogleLogin
          clientId={'32155834743-hvm93s2a53smgo7bi90n6mgu9m58tmhe.apps.googleusercontent.com'}
          buttonText="Google"
          onSuccess={(result) => onLoginSuccess(result)}
          onFailure={(result) => console.log('onFailure : ', result)}
        />
      </LoginContent>
    </Wrapper>
  );
};

export default Login;
