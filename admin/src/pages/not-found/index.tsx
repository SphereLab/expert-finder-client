import { Navigate } from 'react-router-dom';

import unpluggedCable from '@/assets/images/unplugged-cable.svg';
import { useAuth } from '@/components/auth-context/use-auth';
import { PATHS } from '@/components/routes/paths';

import styles from './not-found.module.css';

export const NotFound = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated !== 'authenticated') {
    return <Navigate to={PATHS.LOGIN} />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div>
          <span className={styles.error}>404</span>
          <span className={styles.name}>not found</span>
        </div>
        <p className={styles.oops}>Oops!</p>
        <p className={styles.message}>
          It seems the page you&apos;re looking for is missing or doesn&apos;t exist. Please check
          the URL for any errors, or return to the homepage to continue exploring.
        </p>
      </div>
      <img src={unpluggedCable} alt="Unplugged Cable" />
    </div>
  );
};
