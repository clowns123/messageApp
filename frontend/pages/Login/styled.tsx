import styled from 'styled-components';
import rsupportLogo from '@assects/images/rsupportLogo.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;
export const Logo = styled.img`
  background-image: url(${rsupportLogo});
  background-repeat: no-repeat;
  width: 500px;
  height: 110px;
`;

export const LoginContent = styled.div`
  margin-top: 10px;
`;
