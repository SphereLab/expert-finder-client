import { FC } from 'react';

import { cn } from '@/utils/cn';

import styles from './Spinner.module.css';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={cn(styles.spinner, className)} />
);
