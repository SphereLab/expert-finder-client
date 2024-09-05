import xImage from '@/assets/images/x.svg';

import styles from './permission-denied.module.css';

export const PermissionDenied = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <div>
        <span className={styles.error}>403</span>
        <span className={styles.name}>forbidden </span>
      </div>
      <p className={styles.oops}>Oops!</p>
      <div className={styles.message}>
        <p>Looks like you don&apos;t have permissions to access this page.</p>
        <p>If you believe this is an error, contact the site administrator.</p>
      </div>
    </div>
    <img src={xImage} alt="Unplugged Cable" />
  </div>
);
