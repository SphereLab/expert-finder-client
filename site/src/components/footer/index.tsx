import darkLogo from '@/assets/images/logo-light.svg';
import sphereLogo from '@/assets/images/sphere-logo.svg';

import { CustomNavLink } from '../custom-nav-link';
import { PATHS } from '../routes/paths';

import styles from './footer.module.css';

export const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.firstRow}>
          <img src={darkLogo} alt="logo" className={styles.logo} />

          <div className={styles.mainSiteInfo}>
            <span>Visit our main site</span>
            <img src={sphereLogo} alt="logo" className={styles.logo} />
          </div>

          <div className={styles.externalLinks}>
            <CustomNavLink to={PATHS.PRIVACY_POLICY}>Terms and Conditions</CustomNavLink>
            <CustomNavLink to={PATHS.PRIVACY_POLICY}>Privacy Policy</CustomNavLink>
          </div>
        </div>
        <div className={styles.secondRow}>
          <span>
            © 2005-{getCurrentYear()} Copyright&nbsp;
            <a className={styles.sphereLink} href="https://www.sphereinc.com">
              Sphere Software, LLC
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
