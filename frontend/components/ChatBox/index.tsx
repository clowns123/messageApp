import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

function ChatBox() {
  const { chatId } = useParams<{ chatId: string }>();
  const [value, setValue] = React.useState('');
  const [chats, setChats] = React.useState<Chat[]>([]);
  const focus = React.useRef<HTMLDivElement | null>(null);

  // React.useEffect(() => {
  //   let unsubscribe = db
  //     .collection('chats')
  //     .doc(chatId)
  //     .collection('messages')
  //     .orderBy('date', 'asc')
  //     .onSnapshot((snapshot) => {
  //       let chats: Chat[] = [];
  //       snapshot.forEach((doc) => {
  //         const msg = doc.data();
  //         chats.push({ ...msg, id: doc.id, date: msg.date.toDate() } as Chat);
  //       });
  //       setChats(chats);
  //       if (focus.current) focus.current.scrollIntoView();
  //     });
  //   return () => {
  //     setRoom('');
  //     unsubscribe();
  //   };
  // }, [setRoom, chatId]);

  const handleAddMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    const msg = {
      msg: value,
      date: new Date(),
      // name: state.user!.name,
      // userId: state.user!.id,
    };
    db.collection('chats').doc(chatId).collection('messages').add(msg);
    setValue('');
  };

  return (
    <form onSubmit={handleAddMsg}>
      <ReactQuillStyle theme="snow" value={value} onChange={setValue} />
    </form>
  );
}

const ReactQuillStyle = styled(ReactQuill)`
  width: 100%;
  padding: 10px;
`;

export default ChatBox;
