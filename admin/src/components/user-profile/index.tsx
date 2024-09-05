import { FC } from 'react';
import { Flex, Typography } from 'antd';
import clsx from 'clsx';

import { SiderAvatar } from '../sider-avatar';
import { useUser } from '../user-context/use-user';

import styles from './user-profile.module.css';

const { Text, Title } = Typography;

interface UserProfileProps {
  collapsed: boolean;
}

export const UserProfile: FC<UserProfileProps> = ({ collapsed }) => {
  const { userInfo } = useUser();

  if (userInfo === null) {
    return null;
  }

  return (
    <Flex vertical align="center" gap={12} className={styles.root}>
      <SiderAvatar src={userInfo.photo} />

      <Title level={5} className={clsx(styles.text, styles.username)} hidden={collapsed}>
        {userInfo.firstName} {userInfo.lastName}
      </Title>
      <Text className={styles.text} hidden={collapsed}>
        {userInfo.email}
      </Text>
    </Flex>
  );
};
