import { FC } from 'react';
import { Table, TableProps } from 'antd';

interface TableDataType extends TableProps {
  total?: number;
  current?: number;
}

export const DefaultTable: FC<TableDataType> = ({ total, current, ...props }) => (
  <Table
    rowKey="id"
    bordered
    pagination={{
      hideOnSinglePage: true,
      total,
      showTotal: totalItems => `Total ${totalItems} items`,
      pageSizeOptions: ['10', '25', '50'],
      showSizeChanger: true,
      current,
    }}
    scroll={{ x: true }}
    rowClassName="clickableRow"
    {...props}
  />
);
