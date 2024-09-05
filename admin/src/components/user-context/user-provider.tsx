import { ReactNode } from 'react';

import { UserInfo } from '@/shared/types';
import { useLocalStorage } from '@/utils/hooks/use-local-storage';

import { UserContext } from './context';

type UserProviderProps = { children: ReactNode };

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useLocalStorage<UserInfo | null>('userInfo', null);

  const value = { userInfo, setUserInfo };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
