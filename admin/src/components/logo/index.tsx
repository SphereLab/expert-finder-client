import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logo from '@/assets/images/logo.svg';

import { PATHS } from '../routes/paths';

import styles from './logo.module.css';

export const Logo = () => {
  const { pathname } = useLocation();

  return (
    <Link
      className={clsx(styles.root, {
        [styles.noPointer]: pathname === PATHS.LOGIN,
      })}
      to={pathname !== PATHS.LOGIN ? PATHS.EXPERTS : PATHS.LOGIN}
    >
      <img src={logo} alt="logo" />
    </Link>
  );
};
