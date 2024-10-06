import { FC, useCallback, useEffect, useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { SorterResult } from 'antd/es/table/interface';
import queryString from 'query-string';
import { EyeOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';

import { handleApiRequest } from '@/api/api-service';
import { REFS } from '@/api/refs';
import { DefaultTable } from '@/components/default-table';
import { TableColumnFilter } from '@/components/table-column-filter';
import { TableResponse } from '@/shared/types';
import { useSelectedColumns } from '@/utils/hooks/use-selected-columns';
import { setItemToLocalStorage } from '@/utils/set-item-to-local-storage';

import { ExpertSorterType, ExpertSourceType, FilterType, SetFilters } from '../../types';

const defaultColumns = [
  { value: 'id', label: 'Id' },
  { value: 'firstName', label: 'First Name' },
  { value: 'profilePicture', label: 'Profile Picture' },
  { value: 'yearsOfExperience', label: 'Years Of Experience' },
];
const defaultColumnsKeys = defaultColumns.map(column => column.value);
const columnName = 'expertsColumns';

interface ExpertsTableProps {
  filters: FilterType;
  setFilters: SetFilters;
}

export const ExpertsTable: FC<ExpertsTableProps> = ({ filters, setFilters }) => {
  const [selectedColumns, setSelectedColumns] = useSelectedColumns(columnName, defaultColumnsKeys);

  const [dataSource, setDataSource] = useState<ExpertSourceType[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTableData = useCallback(() => {
    setIsLoading(true);

    const { sort, ...rest } = filters;
    const queryParams = `${queryString.stringify(rest)}&sort=${sort.field}:${sort.order}`;

    handleApiRequest<TableResponse<ExpertSourceType>>({
      url: `${REFS.EXPERTS}/filter?${queryParams}`,
      method: 'GET',
    })
      .then(res => {
        setDataSource(res.data);
        setTotal(res.totalCount);
      })
      .finally(() => setIsLoading(false));
  }, [filters]);

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  const columns: ColumnsType<ExpertSourceType> = [
    {
      dataIndex: 'id',
      title: 'Id',
      hidden: !selectedColumns.includes('id'),
    },
    {
      dataIndex: 'firstName',
      title: 'First Name',
      hidden: !selectedColumns.includes('firstName'),
    },
    {
      dataIndex: 'profilePicture',
      title: 'Profile Picture',
      hidden: !selectedColumns.includes('profilePicture'),
    },
    {
      dataIndex: 'yearsOfExperience',
      title: 'Years Of Experience',
      hidden: !selectedColumns.includes('yearsOfExperience'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, row) => (
        <Dropdown menu={{ items: renderActionsMenu(row) }}>
          <MoreOutlined className="moreIcon" onClick={e => e.stopPropagation()} />
        </Dropdown>
      ),
      filterDropdown: () => (
        <TableColumnFilter
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          setItemToLocalStorage={setItemToLocalStorage}
          defaultColumns={defaultColumns}
          columnName={columnName}
        />
      ),
      filterIcon: () => <SettingOutlined style={{ fontSize: 18 }} />,
    },
  ];

  const renderActionsMenu = (row: ExpertSourceType) => {
    const { id } = row;

    const actionsMenu: MenuProps['items'] = [
      {
        key: '1',
        label: 'View',
        icon: <EyeOutlined className="menuIcon" />,
        onClick: e => {
          e.domEvent.stopPropagation();
          // eslint-disable-next-line no-console
          console.log(id);
        },
      },
    ];

    return actionsMenu;
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    sorter: SorterResult<ExpertSourceType> | SorterResult<ExpertSourceType>[],
  ) => {
    if (Array.isArray(sorter)) {
      return;
    }

    const sort: ExpertSorterType = {
      field: sorter.field as ExpertSorterType['field'],
      order: sorter.order === 'ascend' ? 'asc' : 'desc',
    };

    setFilters(prev => {
      let newFilter = {
        ...prev,
        page: pagination.current ? pagination.current : 1,
        sort,
      };

      if (pagination.pageSize !== prev.limit) {
        newFilter = {
          ...newFilter,
          limit: pagination.pageSize ? pagination.pageSize : 10,
          page: 1,
        };
      }

      return newFilter;
    });
  };

  return (
    <DefaultTable
      rowKey="id"
      columns={columns}
      dataSource={dataSource}
      onChange={(pagination, _, sorter) => handleTableChange(pagination, sorter)}
      loading={isLoading}
      current={filters.page}
      total={total}
    />
  );
};
