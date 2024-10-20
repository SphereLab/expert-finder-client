import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { ContactUs } from '@/pages/contact-us';
import { Expert } from '@/pages/expert';
import { Experts } from '@/pages/experts';
import { Home } from '@/pages/home';
import { PrivacyPolicy } from '@/pages/privacy-policy';

import { AppLayout } from '../app-layout';
import { PATHS } from './paths';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: PATHS.EXPERTS,
          element: <Experts />,
        },
        {
          path: PATHS.EXPERT,
          element: <Expert />,
        },
        {
          path: PATHS.CONTACT_US,
          element: <ContactUs />,
        },
        {
          path: PATHS.PRIVACY_POLICY,
          element: <PrivacyPolicy />,
        },
        {
          path: '*',
          element: <Navigate to={PATHS.HOME} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export { AppRoutes as Routes };
