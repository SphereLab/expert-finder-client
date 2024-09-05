import { TokenInfo } from '@/shared/types';

import { getItemFromLocalStorage } from './get-item-from-local-storage';
import { logout } from './logout';

export const getToken = (type: 'access' | 'refresh') => {
  const name = type === 'access' ? 'token' : 'refreshToken';

  const token = (getItemFromLocalStorage('tokenInfo') as TokenInfo)?.[name];

  if (token === undefined) {
    logout();
  }

  return token;
};
