import { Fragment, useEffect, useRef, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import clsx from 'clsx';

import logo from '@/assets/images/logo-dark.svg';
import { useBreakpoint } from '@/utils/use-breakpoint';

import { DropdownMenu } from '../dropdown-menu';
import { PATHS } from '../routes/paths';

import styles from './header.module.css';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { isBelowLg, isAboveLg } = useBreakpoint('lg');
  const menuIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isAboveLg) {
      setIsMenuVisible(false);
    }
  }, [isAboveLg]);

  const isActiveLink = ({ isActive }: NavLinkRenderProps) => clsx(isActive && styles.activeNavLink);

  const renderNavItems = () => (
    <ul className={isBelowLg ? styles.navList : styles.navListDesktop}>
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
  );

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <NavLink to={PATHS.HOME}>
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>

        {isBelowLg ? (
          <Fragment>
            <div ref={menuIconRef} onClick={() => setIsMenuVisible(prev => !prev)}>
              <HiOutlineMenu className={styles.menuIcon} size={34} />
            </div>

            {isMenuVisible && (
              <DropdownMenu
                onClose={() => setIsMenuVisible(false)}
                customItems={renderNavItems()}
                activator={menuIconRef.current}
              />
            )}
          </Fragment>
        ) : (
          <nav>{renderNavItems()}</nav>
        )}
      </div>
    </header>
  );
};
