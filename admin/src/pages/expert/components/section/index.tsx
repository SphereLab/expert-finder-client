import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './section.module.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ children, className }) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);
