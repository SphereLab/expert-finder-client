import { UserInfo } from '@/shared/types';

import { getItemFromLocalStorage } from './get-item-from-local-storage';
import { logout } from './logout';

export const getToken = (type: 'access' | 'refresh') => {
  const name = type === 'access' ? 'access_token' : 'refresh_token';
  const token = (getItemFromLocalStorage('userInfo') as UserInfo)[name];

  if (token === undefined) {
    logout({
      forceLogout: false,
      redirect: true,
    });
  }

  return token;
};
