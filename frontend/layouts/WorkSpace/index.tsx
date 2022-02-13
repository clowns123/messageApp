import { loginState } from '@atoms/loginState';
import { userInfoData } from '@atoms/userInfo';
import useLogout from '@utils/useLogout';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuImg,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './styles';
import { Route, Routes } from 'react-router';
import loadable from '@loadable/component';
import Menu from '@components/Menu';
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const WorkSpace: FC = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoData);
  const [isLogin, _] = useRecoilState(loginState);
  const getLocalstorage = sessionStorage.getItem('login_session');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const logout = useLogout();

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isLogin) {
      if (userInfo.access_token === '') {
        if (getLocalstorage) {
          setUserInfo(JSON.parse(getLocalstorage));
        }
      }
    }
  }, []);
  useEffect(() => {
    console.log('userInfo1 : ', userInfo);
  }, [userInfo]);

  return (
    <>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={userInfo.imageUrl} alt={userInfo.name} />
          </span>
          {showUserMenu && (
            <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onClickUserProfile}>
              <ProfileModal>
                <MenuImg src={userInfo.imageUrl} alt={userInfo.name} />
                <div>
                  <span id="profile-name">{userInfo.name}</span>
                  <span id="profile-active">로그인</span>
                </div>
              </ProfileModal>
              <LogOutButton onClick={logout}>로그아웃</LogOutButton>
            </Menu>
          )}
        </RightMenu>
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
