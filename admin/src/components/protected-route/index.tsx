import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../auth-context/use-auth';
import { PATHS } from '../routes/paths';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated === 'authenticated' ? children : <Navigate to={PATHS.LOGIN} />;
};
