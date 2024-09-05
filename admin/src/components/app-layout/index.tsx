import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import clsx from 'clsx';

import { Header } from '@/components/header';

import { PATHS } from '../routes/paths';
import { SideMenu } from '../side-menu';

import styles from './app-layout.module.css';

const excludedNavigationPaths = [PATHS.LOGIN, PATHS.PERMISSION_DENIED, PATHS.NOT_FOUND];

export const AppLayout = () => {
  const { pathname } = useLocation();

  const showMenu = !excludedNavigationPaths.includes(pathname as PATHS);
  const withoutStyles = pathname === PATHS.PERMISSION_DENIED || pathname === PATHS.NOT_FOUND;

  return (
    <Layout>
      <Header />
      <Layout>
        {showMenu && <SideMenu />}
        <Layout.Content className={clsx(styles.content, withoutStyles && styles.excludedPages)}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
