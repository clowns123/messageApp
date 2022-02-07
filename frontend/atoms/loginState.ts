import checkLogin from '@utils/checkLogin';
import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: checkLogin(),
});
