import ChatBox from '@components/ChatBox';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Channel = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return (
    <>
      <div>채널입니다.</div>
      <ChatBoxWapperStyle>
        <ChatBox />
      </ChatBoxWapperStyle>
    </>
  );
};

const ChatBoxWapperStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Channel;
