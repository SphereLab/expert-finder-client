import { FC, ReactNode } from 'react';
import { Popconfirm, PopconfirmProps } from 'antd';

import styles from './custom-popconfirm.module.css';

interface CustomPopconfirmProps extends Partial<PopconfirmProps> {
  children: ReactNode;
}

export const CustomPopconfirm: FC<CustomPopconfirmProps> = ({
  children,
  onConfirm,
  description,
}) => (
  <Popconfirm
    overlayClassName={styles.root}
    title="Heads up!"
    description={description}
    onConfirm={onConfirm}
  >
    {children}
  </Popconfirm>
);
