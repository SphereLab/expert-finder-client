import { FC, ReactNode, SyntheticEvent, useEffect, useRef } from 'react';
import cn from 'clsx';

import styles from './dropdown-menu.module.css';

export interface DropdownMenuItem {
  title: string | ReactNode;
  onClick?: (e: SyntheticEvent) => void;
}

interface DropdownMenuProps {
  items?: DropdownMenuItem[];
  customItems?: ReactNode;
  onClose?: () => void;
  itemClassName?: string;
  menuHeading?: ReactNode;
  activator?: Node | null;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  itemClassName,
  items,
  onClose,
  menuHeading,
  activator,
  customItems,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activator?.contains(event.target as Node | null)) {
        return;
      }

      if (!menuRef.current?.contains(event.target as Node | null)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activator, onClose]);

  return (
    <div ref={menuRef} className={styles.root}>
      {menuHeading}
      {items?.length &&
        items.map(({ title, onClick }, index) => (
          <div key={index} onClick={onClick} className={cn(styles.item, itemClassName)}>
            <p>{title}</p>
          </div>
        ))}
      {customItems}
    </div>
  );
};
