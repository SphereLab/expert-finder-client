import { Outlet } from 'react-router-dom';

import { Banner } from '../banner';
import { Footer } from '../footer';
import { Header } from '../header';

import styles from './app-layout.module.css';

export const AppLayout = () => (
  <div className={styles.root}>
    <div className={styles.contentWrapper}>
      <Header />
      <Banner />
      <Outlet />
    </div>
    <Footer />
  </div>
);
