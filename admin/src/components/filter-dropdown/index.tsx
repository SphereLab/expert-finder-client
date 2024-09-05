import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Button, Col, Divider, Dropdown, Form, FormInstance, Row, Space } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import styles from './filter-dropdown.module.css';

interface FilterDropdownProps {
  onFinish: (values: any) => void;
  onReset: () => void;
  form: FormInstance;
  children?: ReactNode;
  disabled?: boolean;
}

export const FilterDropdown: FC<FilterDropdownProps> = ({
  form,
  onFinish,
  onReset,
  children,
  disabled = false,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownPopup = document.querySelectorAll('.dropdown-popup');

      if (dropdownPopup?.length) {
        let isClickedInside = false;

        dropdownPopup.forEach(popup => {
          if (popup.contains(event.target as Node)) {
            isClickedInside = true;
          }
        });

        if (isClickedInside) return;
      }

      if (filterButtonRef.current?.contains(event.target as Node)) return;

      if (event.target) {
        // this checks are for the clear icon in the antd dropdown with multiple select
        const target = event.target as HTMLSpanElement;

        switch (target.tagName) {
          case 'span':
            if (target.classList.contains('anticon-close-circle')) {
              return;
            }
            break;
          case 'svg':
            if ((target.parentNode as HTMLSpanElement).classList.contains('anticon-close-circle')) {
              return;
            }
            break;
          case 'path':
            if (
              (
                (target.parentNode as SVGElement)?.parentNode as HTMLSpanElement
              )?.classList.contains('anticon-close-circle')
            ) {
              return;
            }
            break;
          default:
            break;
        }
      }

      if (!dropdownRef.current?.contains(event.target as Node | null)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    const closeFilterOnEsc = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        closeFilter();
      }
    };

    document.addEventListener('keydown', closeFilterOnEsc);

    return () => document.removeEventListener('keydown', closeFilterOnEsc);
  }, []);

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const handleFormSubmit = (values: any) => {
    onFinish(values);

    closeFilter();
  };

  const handleFormReset = () => {
    onReset();

    closeFilter();
  };

  const renderDropdownContent = () => (
    <Space direction="vertical" className={styles.filterDropdown} ref={dropdownRef}>
      <Form
        className={styles.filterForm}
        colon={false}
        autoComplete="off"
        layout="vertical"
        onFinish={handleFormSubmit}
        onReset={handleFormReset}
        form={form}
      >
        {children}

        <Divider className={styles.filterDivider} />

        <Row justify="end" gutter={8}>
          <Col>
            <Button className={styles.filterResetButton} htmlType="reset">
              Reset
            </Button>
          </Col>

          <Col>
            <Button className={styles.filterSearchButton} type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Space>
  );

  return (
    <Dropdown dropdownRender={renderDropdownContent} open={isFilterOpen} disabled={disabled}>
      <Button
        ref={filterButtonRef}
        icon={<FilterOutlined className={disabled ? styles.disabledIcon : styles.filterIcon} />}
        onClick={() => setIsFilterOpen(isOpen => !isOpen)}
        disabled={disabled}
      >
        Filter
      </Button>
    </Dropdown>
  );
};
