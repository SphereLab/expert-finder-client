import { FC, Fragment, useEffect, useState } from 'react';
import { GetProp, Upload, UploadFile, UploadProps } from 'antd';
import clsx from 'clsx';
import { PlusOutlined } from '@ant-design/icons';

import { ImagePreview } from '../image-preview';

import styles from './image-upload.module.css';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

export const ImageUpload: FC<UploadProps> = ({ className, onChange, fileList, ...props }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<UploadFile>();
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    setSelectedFile(fileList?.[0]);
  }, [fileList]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (previewFile: UploadFile) => {
    if (!previewFile.url && !previewFile.preview) {
      previewFile.preview = await getBase64(previewFile.originFileObj as FileType);
    }

    setPreviewImage(previewFile.url || (previewFile.preview as string));
    setPreviewOpen(true);
  };

  return (
    <Fragment>
      <Upload
        className={clsx(className, isFailed && styles.error)}
        listType="picture-card"
        accept="image/png, image/jpeg, image/jpg"
        onPreview={handlePreview}
        fileList={fileList}
        onChange={info => {
          setIsFailed(false);
          setSelectedFile(info.fileList[0]);

          onChange?.(info);
        }}
        beforeUpload={({ size }) => {
          if (!(size / 1024 < 50)) {
            setIsFailed(true);

            return Upload.LIST_IGNORE;
          }
        }}
        {...props}
      >
        {!selectedFile && (
          <button className={styles.button} type="button">
            <PlusOutlined />
            <div className={styles.text}>Upload</div>
          </button>
        )}
      </Upload>
      {isFailed && (
        <div className={styles.errorText}>
          You need to upload max 50KB pictures, please try again
        </div>
      )}
      <ImagePreview open={previewOpen} onClose={handleCancel} src={previewImage} />
    </Fragment>
  );
};
