import { Layout } from 'antd';

import { Logo } from '@/components/logo';

import styles from './header.module.css';

export const Header = () => (
  <Layout.Header className={styles.root}>
    <Logo />
  </Layout.Header>
);
