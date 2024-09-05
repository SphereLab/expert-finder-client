import { UserInfo } from '@/shared/types';

export interface ContextType {
  userInfo: UserInfo | null;
  setUserInfo: (value: UserInfo | ((val: UserInfo | null) => UserInfo | null) | null) => void;
}
