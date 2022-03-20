import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { db } from '@utils/firebase';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userChannelData, userInfoData } from '@atoms/userInfo';

type Chat = {
  id: string;
  name: string;
  msg: string;
  userId: string;
  date: Date;
};

function ChatBox() {
  const [value, setValue] = useState('');
  const focus = React.useRef<HTMLDivElement | null>(null);
  const userInfo = useRecoilValue(userInfoData);
  const channelName = window.location.pathname.split('/')[3];

  const { chatId } = useParams<{ chatId: string }>();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
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
        setChats(chats);
        if (focus.current) focus.current.scrollIntoView();
      });
    return () => {
      unsubscribe();
    };
  }, [chatId]);

  const handleAddMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    const msg = {
      msg: value,
      date: new Date(),
      name: userInfo.name,
      userId: userInfo.email,
    };
    db.collection('chats').doc(channelName).collection('messages').add(msg);
    setValue('');
  };

  return (
    <FromStyle onSubmit={handleAddMsg}>
      <ReactQuillStyle theme="snow" value={value} onChange={setValue} />
      <SubmitButton>전송</SubmitButton>
    </FromStyle>
  );
}

const FromStyle = styled.form``;

const ReactQuillStyle = styled(ReactQuill)`
  width: 100%;
  padding: 10px;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
`;

export default ChatBox;
