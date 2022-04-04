import { ChatWrapper } from '@components/Chat/styles';
import React, { VFC, memo, useMemo } from 'react';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';

interface Props {
  data: Chat;
}
type Chat = {
  id: string;
  name: string;
  msg: string;
  userId: string;
  date: Date;
};

const Chat: VFC<Props> = ({ data }) => {
  console.log('ghkdxogus data.date : ', data.date);
  return (
    <ChatWrapper>
      <div className="chat-text">
        <div className="chat-user">
          <b>{data.name} </b>
          <span>{dayjs(data.date).format('h:mm A')}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.msg }}></div>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
