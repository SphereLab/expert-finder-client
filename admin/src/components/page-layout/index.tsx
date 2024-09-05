import { FC, ReactNode } from 'react';

import styles from './page-layout.module.css';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
