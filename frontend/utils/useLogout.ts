import { loginState } from '@atoms/loginState';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';

const googleLogout = async () => {
  if (window.gapi) {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.then(
        async () => {
          await auth2.signOut();
        },
        (err) => console.log(err),
      );
      await auth2.disconnect();
    }
  }
};

function useLogout() {
  const [_, setIsLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('login_session');
    googleLogout().then();
    setIsLogin(false);
    navigate('/');
  };

  return logout;
}

export default useLogout;
