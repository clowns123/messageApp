import WorkSpace from '@layouts/WorkSpace';
import React, { useEffect } from 'react';

const DirectMessage = () => {
  useEffect(() => {
    console.log('채널입장');
  }, []);
  return <>DM입니다.</>;
};

export default DirectMessage;
