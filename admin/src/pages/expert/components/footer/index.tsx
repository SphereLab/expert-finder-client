import { FC } from 'react';
import { Button, Row } from 'antd';

import styles from './footer.module.css';

interface FooterProps {
  onCancel: () => void;
  isLoading: boolean;
}

export const Footer: FC<FooterProps> = ({ onCancel, isLoading }) => (
  <div className={styles.root}>
    <Row justify="end">
      <Button size="large" onClick={onCancel}>
        Cancel
      </Button>

      <Button
        className={styles.saveButton}
        size="large"
        type="primary"
        htmlType="submit"
        loading={isLoading}
      >
        Save
      </Button>
    </Row>
  </div>
);
