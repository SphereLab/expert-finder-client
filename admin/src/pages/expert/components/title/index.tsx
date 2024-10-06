import { FC } from 'react';
import { Typography } from 'antd';
import clsx from 'clsx';

import styles from './title.module.css';

interface TitleProps {
  className?: string;
  title: string;
}

export const Title: FC<TitleProps> = ({ className, title }) => (
  <Typography.Title level={5} className={clsx(styles.root, className)}>
    {title}
  </Typography.Title>
);
