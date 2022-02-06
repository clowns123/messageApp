import { atom } from 'recoil';

export const userInfoData = atom({
  key: 'userInfo',
  default: {
	name: '',
    email: '',
    access_token: '',
    imageUrl: '',
  },
});
