import ChatBox from '@components/ChatBox';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Channel = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return (
    <>
      <ChannelWapper>
        <MessageList></MessageList>
        <ChatBoxWapperStyle>
          <ChatBox />
        </ChatBoxWapperStyle>
      </ChannelWapper>
    </>
  );
};

const ChannelWapper = styled.div`
  display: flex;
  flex-flow: column;
  overflow: auto;
  position: relative;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 206px);
`;

const ChatBoxWapperStyle = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
`;

export default Channel;
