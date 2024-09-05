import { FC } from 'react';
import { Checkbox } from 'antd';

import styles from './table-column-filter.module.css';

interface TableColumnFilterProps {
  selectedColumns: string[];
  setSelectedColumns: (cols: string[]) => void;
  setItemToLocalStorage: (key: string, value: string[]) => void;
  defaultColumns: {
    label: string;
    value: string;
  }[];
  columnName: string;
}

export const TableColumnFilter: FC<TableColumnFilterProps> = ({
  selectedColumns,
  setSelectedColumns,
  setItemToLocalStorage,
  defaultColumns,
  columnName,
}) => (
  <div className={styles.root}>
    <Checkbox.Group
      className={styles.checkboxGroup}
      value={selectedColumns}
      options={defaultColumns}
      onChange={cols => {
        setSelectedColumns(cols);
        setItemToLocalStorage(columnName, cols);
      }}
    />
  </div>
);
