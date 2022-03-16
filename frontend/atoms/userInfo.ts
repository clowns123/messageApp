import { atom } from 'recoil';
import { Ichannel } from 'types/db';

export const userInfoData = atom({
  key: 'userInfo',
  default: {
    name: '',
    email: '',
    access_token: '',
    imageUrl: '',
  },
});

export const userChannelData = atom<Ichannel[]>({
  key: 'userChannel',
  default: [
    {
      channelId: 0,
      channelName: 'string',
      private: false,
    },
  ],
});
