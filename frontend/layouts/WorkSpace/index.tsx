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
  WorkspaceWrapper,
} from './styles';
import { Route, Routes } from 'react-router';
import loadable from '@loadable/component';
import Menu from '@components/Menu';
import { useQuery, useQueryClient } from 'react-query';
import { Ichannel, IUser } from 'types/db';
import fetcher from '@utils/fetcher';
import ChannelList from '@components/ChannelList';
import MessageList from '@components/MessageList';

const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const WorkSpace: FC = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoData);
  const [isLogin, _] = useRecoilState(loginState);
  const getLocalstorage = sessionStorage.getItem('login_session');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const logout = useLogout();
  console.log('ghkdxogus userInfo.email : ', userInfo.email);

  const { data: userData } = useQuery<IUser | false>('user', () => fetcher({ queryKey: '/api/users' }), {});

  useEffect(() => {
    console.log('ghkdxogus userData ', userData);
  }, [userData]);

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
                  <span id="profile-active">?????????</span>
                </div>
              </ProfileModal>
              <LogOutButton onClick={logout}>????????????</LogOutButton>
            </Menu>
          )}
        </RightMenu>
      </Header>
      <WorkspaceWrapper>
        <Channels>
          <WorkspaceName>Channels</WorkspaceName>
          <MenuScroll>
            <ChannelList />
            <MessageList />
          </MenuScroll>
        </Channels>
        <Chats>
          <Routes>
            <Route path="/channel/*" element={<Channel />} />
            <Route path="/dm/*" element={<DirectMessage />} />
          </Routes>
        </Chats>
      </WorkspaceWrapper>
    </>
  );
};

export default WorkSpace;
