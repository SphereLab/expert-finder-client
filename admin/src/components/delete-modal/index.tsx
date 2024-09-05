import { FC } from 'react';
import { Modal, ModalProps } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import styles from './delete-modal.module.css';

interface DeleteModalProps extends ModalProps {
  question: string;
}

export const DeleteModal: FC<DeleteModalProps> = ({ question, ...props }) => (
  <Modal
    centered
    closeIcon={false}
    destroyOnClose
    title={
      <div className={styles.title}>
        <ExclamationCircleFilled className={styles.icon} />
        Heads up!
      </div>
    }
    {...props}
  >
    <div className={styles.question}>{question}?</div>
  </Modal>
);
