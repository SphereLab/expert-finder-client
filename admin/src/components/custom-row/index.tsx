import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './custom-row.module.css';

interface CustomRowProps {
  children: ReactNode;
  className?: string;
  columns?: number;
  columnGap?: number;
  rowGap?: number;
  itemsCenter?: boolean;
}

export const CustomRow: FC<CustomRowProps> = ({
  children,
  className,
  columns = 3,
  columnGap = 120,
  rowGap = 24,
  itemsCenter = false,
}) => (
  <div
    className={clsx(styles.root, className, {
      [styles.alignCenter]: itemsCenter,
    })}
    style={{
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      columnGap,
      rowGap,
    }}
  >
    {children}
  </div>
);
