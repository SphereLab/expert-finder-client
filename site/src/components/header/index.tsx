import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import clsx from 'clsx';

import logo from '@/assets/images/logo-dark.svg';

import { PATHS } from '../routes/paths';

import styles from './header.module.css';

export const Header = () => {
  const isActiveLink = ({ isActive }: NavLinkRenderProps) => clsx(isActive && styles.activeNavLink);

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <NavLink to={PATHS.HOME}>
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>

        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <NavLink className={isActiveLink} to={PATHS.EXPERTS}>
                Find an expert
              </NavLink>
            </li>
            <li className={styles.navListItem}>
              <NavLink className={isActiveLink} to={PATHS.CONTACT_US}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
