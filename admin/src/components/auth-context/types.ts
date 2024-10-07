import { UserInfo } from '@/shared/types';

export type IsAuthenticated = 'authenticated' | 'unauthenticated';

export interface ContextType {
  isAuthenticated: IsAuthenticated;
  setIsAuthenticated: (
    value: IsAuthenticated | ((val: IsAuthenticated) => IsAuthenticated),
  ) => void;
  userInfo: UserInfo | null;
  setUserInfo: (value: UserInfo | ((val: UserInfo | null) => UserInfo | null) | null) => void;
}
