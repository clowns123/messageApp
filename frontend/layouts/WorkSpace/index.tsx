import { loginState } from '@atoms/loginState';
import { userInfoData } from '@atoms/userInfo';
import useLogout from '@utils/useLogout';
import React, { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  Channels,
  Chats,
  Header,
  MenuScroll,
  ProfileImg,
  RightMenu,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './styles';
import gravatar from 'gravatar';
import { Route, Routes } from 'react-router';
import loadable from '@loadable/component';
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const WorkSpace: FC = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoData);
  const [isLogin, _] = useRecoilState(loginState);
  const getLocalstorage = sessionStorage.getItem('login_session');

  const logout = useLogout();

  useEffect(() => {
    if (isLogin) {
      if (userInfo.access_token === '') {
        if (getLocalstorage) {
          setUserInfo(JSON.parse(getLocalstorage));
          console.log('userInfo1 : ', userInfo);
        }
      }
    }
  }, []);

  return (
    <>
      <Header>
        <RightMenu>
          <ProfileImg src={gravatar.url(userInfo.email, { s: '28px', d: 'retro' })} alt={userInfo.name} />
        </RightMenu>
        <button onClick={logout}>로그아웃</button>
      </Header>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Channels</WorkspaceName>
          <MenuScroll>menu Scroll</MenuScroll>
        </Channels>
        <Chats>
          <Routes>
            <Route path="channel" element={<Channel />} />
            <Route path="dm" element={<DirectMessage />} />
          </Routes>
        </Chats>
      </WorkspaceWrapper>
    </>
  );
};

export default WorkSpace;
