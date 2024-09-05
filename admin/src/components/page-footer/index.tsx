import { FC, ReactNode, useEffect, useState } from 'react';

import styles from './page-footer.module.css';

interface FooterProps {
  footerElements: ReactNode;
}

const PAGE_PADDINGS = 48;

export const PageFooter: FC<FooterProps> = ({ footerElements }) => {
  const [footerWidth, setFooterWidth] = useState('calc(100% - 248px)');

  useEffect(() => {
    const siderMenu = document.getElementById('sider-id');

    if (!siderMenu) {
      return;
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;

        setFooterWidth(`calc(100% - ${newWidth + PAGE_PADDINGS}px)`);
      }
    });

    resizeObserver.observe(siderMenu);
  }, []);

  return (
    <div
      className={styles.root}
      style={{
        width: footerWidth,
      }}
    >
      {footerElements}
    </div>
  );
};
