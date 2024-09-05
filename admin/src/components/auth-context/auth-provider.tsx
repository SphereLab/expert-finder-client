import { ReactNode } from 'react';

import { TokenInfo } from '@/shared/types';
import { useLocalStorage } from '@/utils/hooks/use-local-storage';

import { AuthContext } from './context';
import { IsAuthenticated } from './types';

type AuthProviderProps = { children: ReactNode };

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<IsAuthenticated>(
    'isAuthenticated',
    'unauthenticated',
  );
  const [tokenInfo, setTokenInfo] = useLocalStorage<TokenInfo | null>('tokenInfo', null);

  const value = { isAuthenticated, setIsAuthenticated, tokenInfo, setTokenInfo };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
