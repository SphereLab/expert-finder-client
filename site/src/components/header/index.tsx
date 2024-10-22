import { Fragment, useEffect, useRef, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

import logo from '@/assets/images/logo-light.svg';
import { useBreakpoint } from '@/utils/use-breakpoint';

import { CustomNavLink } from '../custom-nav-link';
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

  const renderNavItems = () => (
    <ul className={isBelowLg ? styles.navList : styles.navListDesktop}>
      <li className={styles.navListItem}>
        <CustomNavLink to={PATHS.EXPERTS}>Find an expert</CustomNavLink>
      </li>
      <li className={styles.navListItem}>
        <CustomNavLink to={PATHS.CONTACT_US}>Contact us</CustomNavLink>
      </li>
    </ul>
  );

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <CustomNavLink needActive={false} to={PATHS.HOME}>
          <img className={styles.logo} src={logo} alt="logo" />
        </CustomNavLink>

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
