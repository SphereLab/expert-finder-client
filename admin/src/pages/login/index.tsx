import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { App, Typography } from 'antd';
import { GoogleLogin } from '@react-oauth/google';

import { handleApiRequest } from '@/api/api-service';
import { REFS } from '@/api/refs';
import { useAuth } from '@/components/auth-context/use-auth';
import { Loader } from '@/components/loader';
import { PATHS } from '@/components/routes/paths';
import { useUser } from '@/components/user-context/use-user';
import { AuthResponse } from '@/shared/types';
import { getItemFromLocalStorage } from '@/utils/get-item-from-local-storage';
import { useTitle } from '@/utils/hooks/use-title';
import { removeItemFromLocalStorage } from '@/utils/remove-item-from-local-storage';

import styles from './login.module.css';

export const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isAuthenticated, setIsAuthenticated, setTokenInfo } = useAuth();
  const { setUserInfo } = useUser();
  const { message } = App.useApp();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useTitle('Login');

  if (isAuthenticated === 'authenticated') {
    return <Navigate to={PATHS.EXPERTS} />;
  }

  return (
    <div className={styles.root}>
      {isPageLoading && <Loader />}
      <div className={styles.card}>
        <Typography.Title level={3} className={styles.title}>
          Welcome!
        </Typography.Title>
        <Typography.Text className={styles.subTitle} type="secondary">
          To proceed please login using your working account
        </Typography.Text>
        <GoogleLogin
          size="large"
          onSuccess={credentialResponse => {
            setIsPageLoading(true);

            handleApiRequest<AuthResponse>({
              url: REFS.AUTH,
              method: 'POST',
              body: {
                idToken: credentialResponse.credential,
              },
            })
              .then(response => {
                const { user, ...tokenInfo } = response;
                setIsAuthenticated('authenticated');
                setUserInfo(user);
                setTokenInfo(tokenInfo);

                const previousLocation = getItemFromLocalStorage('previousLocation');
                const from = state?.from?.pathname || previousLocation || PATHS.EXPERTS;

                if (previousLocation) {
                  removeItemFromLocalStorage('previousLocation');
                }

                navigate(from, { replace: true });
              })
              .catch(() => {
                navigate(PATHS.PERMISSION_DENIED);
              })
              .finally(() => {
                setIsPageLoading(false);
              });
          }}
          onError={() => {
            message.error('Failed to authenticate with Google. Please try again.');
          }}
          theme="filled_blue"
        />
      </div>
    </div>
  );
};
