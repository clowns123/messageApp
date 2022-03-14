import ChatBox from '@components/ChatBox';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Channel = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return (
    <ChannelWapper>
      <MessageList>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>

        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>

        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>

        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
      </MessageList>
      <ChatBox />
    </ChannelWapper>
  );
};

const ChannelWapper = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

const ChatBoxWapperStyle = styled.div``;

export default Channel;
