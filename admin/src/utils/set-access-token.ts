import { TokenInfo } from '@/shared/types';

import { getItemFromLocalStorage } from './get-item-from-local-storage';
import { setItemToLocalStorage } from './set-item-to-local-storage';

export const setAccessToken = (token: string) => {
  const tokenInfo = getItemFromLocalStorage('tokenInfo') as TokenInfo;

  setItemToLocalStorage('tokenInfo', {
    ...tokenInfo,
    token: token,
  });
};
