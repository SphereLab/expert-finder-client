import { FC } from 'react';
import clsx from 'clsx';

import defaultAvatar from '@/assets/images/default-avatar.svg';

import styles from './sider-avatar.module.css';

interface SiderAvatarProps {
  src: string;
}

export const SiderAvatar: FC<SiderAvatarProps> = ({ src }) => (
  <div className={clsx(styles.bigFrame, styles.roundFlex)}>
    <div className={clsx(styles.middleFrame, styles.roundFlex)}>
      <div className={clsx(styles.smallFrame, styles.roundFlex)}>
        <img
          className={clsx(styles.image, styles.roundFlex)}
          src={src}
          alt="avatar"
          onError={e => (e.currentTarget.src = defaultAvatar)}
        />
      </div>
    </div>
  </div>
);
