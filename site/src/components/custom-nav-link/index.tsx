import { FC } from 'react';
import { NavLink, NavLinkProps, NavLinkRenderProps } from 'react-router-dom';

import { cn } from '@/utils/cn';

import styles from './custom-nav-link.module.css';

interface CustomNavLinkProps extends NavLinkProps {
  needActive?: boolean;
}

export const CustomNavLink: FC<CustomNavLinkProps> = ({ needActive = true, ...props }) => {
  const isActiveLink = ({ isActive }: NavLinkRenderProps) =>
    needActive ? cn(isActive && styles.root) : undefined;

  return <NavLink className={isActiveLink} {...props} />;
};
