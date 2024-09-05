import { MouseEvent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Layout, Menu, MenuProps } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { logout } from '@/utils/logout';

import { useAuth } from '../auth-context/use-auth';
import { PATHS } from '../routes/paths';
import { useUser } from '../user-context/use-user';
import { UserProfile } from '../user-profile';

import styles from './side-menu.module.css';

export const SideMenu = () => {
  const { pathname } = useLocation();
  const { setIsAuthenticated } = useAuth();
  const { userInfo } = useUser();

  const [collapsed, setCollapsed] = useState(false);

  if (userInfo === null) {
    return;
  }

  const currentPath = '/' + pathname.split('/')[1];

  const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, key: string) => {
    if (key === currentPath) {
      if (e.metaKey || e.ctrlKey) {
        window.open(key, '_blank');
      }

      e.preventDefault();
    }
  };

  const getMenuItems = () => {
    const menuItems: MenuProps['items'] = [
      {
        key: PATHS.EXPERTS,
        label: (
          <Link to={PATHS.EXPERTS} onClick={e => handleItemClick(e, PATHS.EXPERTS)}>
            Experts
          </Link>
        ),
        icon: <UserOutlined />,
      },
    ];

    return menuItems;
  };

  const handleLogoutClick = () => {
    setIsAuthenticated('unauthenticated');
    logout();
  };

  return (
    <Layout.Sider
      id="sider-id"
      className={styles.root}
      collapsible
      onCollapse={isCollapsed => setCollapsed(isCollapsed)}
    >
      <div className={styles.sider}>
        <div>
          <UserProfile collapsed={collapsed} />
          <Menu
            className={styles.menu}
            items={getMenuItems()}
            selectedKeys={[currentPath]}
            mode="inline"
          />
        </div>

        <div className={styles.logoutWrapper}>
          <Button onClick={handleLogoutClick} icon={<LogoutOutlined />} className={styles.logout}>
            {collapsed ? '' : 'Logout'}
          </Button>
        </div>
      </div>
    </Layout.Sider>
  );
};
