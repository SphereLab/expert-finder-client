import logo from '@/assets/images/logo-light.svg';

import { CustomNavLink } from '../custom-nav-link';
import { PATHS } from '../routes/paths';

import styles from './footer.module.css';

export const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span>
          © 2005-{getCurrentYear()} Copyright&nbsp;
          <a className={styles.sphereLink} href="https://www.sphereinc.com">
            Sphere Software, LLC
          </a>
          . All Rights Reserved.
        </span>
        <CustomNavLink to={PATHS.PRIVACY_POLICY}>Privacy Policy</CustomNavLink>
      </div>
    </footer>
  );
};
