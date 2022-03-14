import ChatBox from '@components/ChatBox';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Channel = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return (
    <ChannelWapper>
      <div>채널입니다.</div>
      <ChatBoxWapperStyle>
        <ChatBox />
      </ChatBoxWapperStyle>
    </ChannelWapper>
  );
};

const ChannelWapper = styled.div`
  width: 100%;
`;
const ChatBoxWapperStyle = styled.div`
  position: fixed;
  bottom: 0;
`;

export default Channel;
