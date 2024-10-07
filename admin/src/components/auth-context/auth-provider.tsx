import { ReactNode } from 'react';

import { UserInfo } from '@/shared/types';
import { useLocalStorage } from '@/utils/hooks/use-local-storage';

import { AuthContext } from './context';
import { IsAuthenticated } from './types';

type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<IsAuthenticated>(
    'isAuthenticated',
    'unauthenticated',
  );
  const [userInfo, setUserInfo] = useLocalStorage<UserInfo | null>('userInfo', null);

  const value = { isAuthenticated, setIsAuthenticated, userInfo, setUserInfo };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
