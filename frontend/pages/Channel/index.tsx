import ChatBox from '@components/ChatBox';
import React, { useEffect } from 'react';

const Channel = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return (
    <>
      <div>채널입니다.</div>
      <ChatBox />
    </>
  );
};

export default Channel;
