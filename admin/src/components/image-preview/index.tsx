import { FC } from 'react';
import { Modal } from 'antd';

interface ImagePreviewProps {
  open: boolean;
  onClose: () => void;
  src: string;
}

export const ImagePreview: FC<ImagePreviewProps> = ({ open, onClose, src }) => (
  <Modal open={open} footer={null} onCancel={onClose} destroyOnClose>
    <img alt="preview" style={{ width: '100%' }} src={src} />
  </Modal>
);
