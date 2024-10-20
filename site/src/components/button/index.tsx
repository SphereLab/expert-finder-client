import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@/utils/cn';

import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button: FC<ButtonProps> = ({ primary, className, ...props }) => (
  <button
    className={cn(className, styles.root, {
      [styles.primary]: primary,
    })}
    {...props}
  />
);
