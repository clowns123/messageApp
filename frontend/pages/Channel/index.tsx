import ChatBox from '@components/ChatBox';
import React, { ReactComponentElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { db } from '@utils/firebase';
import { useParams } from 'react-router-dom';
import Chat from '@components/Chat';
import { ChannelWapper, ChatBoxWapperStyle, MessageList } from './styles';

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
  const chatRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current?.scrollIntoView({ behavior: 'smooth' });
      chatRef.current.scrollTop = chatRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

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
        <MessageList ref={chatRef}>
          {chats.map((el, index) => (
            <Chat key={index} data={el} />
          ))}
        </MessageList>

        <ChatBoxWapperStyle>
          <ChatBox />
        </ChatBoxWapperStyle>
      </ChannelWapper>
    </>
  );
};
export default Channel;
