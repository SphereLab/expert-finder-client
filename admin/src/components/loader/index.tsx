import { FC } from 'react';
import { Spin } from 'antd';
import clsx from 'clsx';

import styles from './loader.module.css';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <Spin fullscreen className={clsx(className, styles.root)} />
);
