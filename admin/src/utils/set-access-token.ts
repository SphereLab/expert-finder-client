import { UserInfo } from '@/shared/types';

import { getItemFromLocalStorage } from './get-item-from-local-storage';
import { setItemToLocalStorage } from './set-item-to-local-storage';

export const setAccessToken = (token: string) => {
  const userInfo = getItemFromLocalStorage('userInfo') as UserInfo;

  setItemToLocalStorage('userInfo', {
    ...userInfo,
    access_token: token,
  });
};
