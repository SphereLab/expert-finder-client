import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';

import styles from './app-layout.module.css';

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
