import { createContext } from 'react';

import { ContextType } from './types';

export const UserContext = createContext<ContextType | undefined>(undefined);
