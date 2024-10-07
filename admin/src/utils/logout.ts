import { PATHS } from '@/components/routes/paths';

import { removeItemFromLocalStorage } from './remove-item-from-local-storage';
import { setItemToLocalStorage } from './set-item-to-local-storage';

interface LogoutProps {
  forceLogout?: boolean;
  redirect?: boolean;
}

export const logout = ({ forceLogout = false, redirect = true }: LogoutProps) => {
  if (forceLogout) {
    setItemToLocalStorage('previousLocation', window.location.pathname);
  }
  removeItemFromLocalStorage('isAuthenticated');
  removeItemFromLocalStorage('tokenInfo');
  removeItemFromLocalStorage('userInfo');
  if (window.location.pathname !== PATHS.LOGIN && redirect) {
    window.location.href = PATHS.LOGIN;
  }
};
