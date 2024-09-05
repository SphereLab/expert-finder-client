import { TokenInfo } from '@/shared/types';

export type IsAuthenticated = 'authenticated' | 'unauthenticated';

export interface ContextType {
  isAuthenticated: IsAuthenticated;
  setIsAuthenticated: (
    value: IsAuthenticated | ((val: IsAuthenticated) => IsAuthenticated),
  ) => void;
  tokenInfo: TokenInfo | null;
  setTokenInfo: (value: TokenInfo | ((val: TokenInfo | null) => TokenInfo | null) | null) => void;
}
