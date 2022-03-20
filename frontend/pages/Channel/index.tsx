import ChatBox from '@components/ChatBox';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '@utils/firebase';
import { useParams } from 'react-router-dom';

type Chat = {
  id: string;
  name: string;
  msg: string;
  userId: string;
  date: Date;
};

const Channel = () => {
  const channelName = window.location.pathname.split('/')[3];
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    console.log('채널입장 : ', channelName);

    let unsubscribe = db
      .collection('chats')
      .doc(channelName)
      .collection('messages')
      .orderBy('date', 'asc')
      .onSnapshot((snapshot) => {
        let chats: Chat[] = [];
        snapshot.forEach((doc) => {
          const msg = doc.data();
          chats.push({ ...msg, id: channelName, date: msg.date.toDate() } as Chat);
        });
        console.log('ghkdxogus chats : ', chats);
        setChats(chats);
      });

    return () => {
      unsubscribe();
    };
  }, [channelName]);
  return (
    <>
      <ChannelWapper>
        <MessageList>
          {chats.map((el, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: el.msg }}></div>
          ))}
        </MessageList>
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
