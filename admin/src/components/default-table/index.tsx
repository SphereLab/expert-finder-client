import { Table, TableProps } from 'antd';

interface TableDataType<T> extends TableProps<T> {
  total?: number;
  current?: number;
}

export const DefaultTable = <T extends object>({ total, current, ...props }: TableDataType<T>) => (
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
