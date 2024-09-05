import { PATHS } from '@/components/routes/paths';

import { removeItemFromLocalStorage } from './remove-item-from-local-storage';
import { setItemToLocalStorage } from './set-item-to-local-storage';

export const logout = (forceLogout = false) => {
  if (forceLogout) {
    setItemToLocalStorage('previousLocation', window.location.pathname);
  }
  removeItemFromLocalStorage('isAuthenticated');
  removeItemFromLocalStorage('tokenInfo');
  removeItemFromLocalStorage('userInfo');
  if (window.location.pathname !== PATHS.LOGIN) {
    window.location.href = PATHS.LOGIN;
  }
};
