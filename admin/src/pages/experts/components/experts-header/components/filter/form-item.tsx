import { FC } from 'react';
import { Form, FormItemProps } from 'antd';
import clsx from 'clsx';

import { FilterFieldType } from '@/pages/experts/types';

import styles from './filter.module.css';

export const FormItem: FC<FormItemProps<FilterFieldType>> = ({ children, className, ...props }) => (
  <Form.Item className={clsx(styles.formItem, className)} {...props}>
    {children}
  </Form.Item>
);
