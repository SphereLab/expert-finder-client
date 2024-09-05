import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found';
import { PermissionDenied } from '@/pages/permission-denied';

// import { ROLES } from '@/shared/enums';

import { AppLayout } from '../app-layout';
// import { ProtectedRoute } from '../protected-route';
// import { useUser } from '../user-context/use-user';
import { PATHS } from './paths';

const AppRoutes = () => {
  // const { userInfo } = useUser();

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: PATHS.LOGIN,
          element: <Login />,
        },
        {
          path: PATHS.PERMISSION_DENIED,
          element: <PermissionDenied />,
        },
        {
          path: '*',
          element: <Navigate to={PATHS.NOT_FOUND} />,
        },
        {
          path: PATHS.NOT_FOUND,
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { AppRoutes as Routes };
