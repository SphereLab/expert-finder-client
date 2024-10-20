import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { App, Dropdown, MenuProps, Tag } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { SorterResult } from 'antd/es/table/interface';
import dayjs from 'dayjs';
import queryString from 'query-string';
import timezones from 'timezones-list';
import { DeleteOutlined, EditOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';

import { handleApiRequest } from '@/api/api-service';
import { REFS } from '@/api/refs';
import { DefaultTable } from '@/components/default-table';
import { DeleteModal } from '@/components/delete-modal';
import { PATHS } from '@/components/routes/paths';
import { TableColumnFilter } from '@/components/table-column-filter';
import { statusesList } from '@/shared/constants';
import { TableResponse } from '@/shared/types';
import { useSelectedColumns } from '@/utils/hooks/use-selected-columns';
import { setItemToLocalStorage } from '@/utils/set-item-to-local-storage';

import { ExpertSorterType, ExpertSourceType, FilterType, SetFilters } from '../../types';

const defaultColumns = [
  { value: 'id', label: 'Id' },
  { value: 'name', label: 'Name' },
  { value: 'yearsOfExpertise', label: 'Years of expertise' },
  { value: 'totalYears', label: 'Total years' },
  { value: 'timezone', label: 'Timezone' },
  { value: 'expertStatus', label: 'Status' },
  { value: 'createdAt', label: 'Create date' },
  { value: 'updatedAt', label: 'Update date' },
];
const defaultColumnsKeys = defaultColumns.map(column => column.value);
const columnName = 'expertsColumns';

interface ExpertsTableProps {
  filters: FilterType;
  setFilters: SetFilters;
}

export const ExpertsTable: FC<ExpertsTableProps> = ({ filters, setFilters }) => {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const [selectedColumns, setSelectedColumns] = useSelectedColumns(columnName, defaultColumnsKeys);

  const [dataSource, setDataSource] = useState<ExpertSourceType[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [modalInfo, setModalInfo] = useState<ExpertSourceType | null>(null);

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
      dataIndex: 'name',
      title: 'Name',
      hidden: !selectedColumns.includes('name'),
    },
    {
      dataIndex: 'yearsOfExpertise',
      title: 'Years of expertise',
      hidden: !selectedColumns.includes('yearsOfExpertise'),
    },
    {
      dataIndex: 'timezone',
      title: 'Timezone',
      hidden: !selectedColumns.includes('timezone'),
      render: timezone => timezones.find(tz => tz.tzCode === timezone)?.label,
    },
    {
      dataIndex: 'totalYears',
      title: 'Total years',
      hidden: !selectedColumns.includes('totalYears'),
    },
    {
      dataIndex: 'createdAt',
      title: 'Create date',
      render: value => dayjs(value).format('MMM D, YYYY, h:mm A'),
      hidden: !selectedColumns.includes('createdAt'),
    },
    {
      dataIndex: 'updatedAt',
      title: 'Update date',
      render: value => dayjs(value).format('MMM D, YYYY, h:mm A'),
      hidden: !selectedColumns.includes('updatedAt'),
    },
    {
      dataIndex: 'expertStatus',
      title: 'Status',
      hidden: !selectedColumns.includes('expertStatus'),
      render: (_, { expertStatus }) => (
        <Tag
          style={{
            color: statusesList[expertStatus].color,
            backgroundColor: statusesList[expertStatus].backgroundColor,
            borderColor: statusesList[expertStatus].borderColor,
          }}
        >
          {statusesList[expertStatus].name}
        </Tag>
      ),
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
        label: (
          <Link to={`${PATHS.EXPERT}/${id}`} onClick={e => e.stopPropagation()}>
            Edit
          </Link>
        ),
        icon: <EditOutlined className="menuIcon" />,
      },
      {
        key: '2',
        label: 'Delete',
        icon: <DeleteOutlined className="menuIcon" />,
        onClick: e => {
          e.domEvent.stopPropagation();
          setModalInfo(row);
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

  const handleDeleteExpert = (userId: number) => {
    setIsLoading(true);

    handleApiRequest({
      url: `${REFS.EXPERTS}/${userId}`,
      method: 'DELETE',
    })
      .then(() => {
        message.success('Expert deleted successfully');
        setModalInfo(null);
      })
      .then(() => {
        if (dataSource.length === 1) {
          setFilters(prev => ({
            ...prev,
            page: prev.page === 1 ? 1 : prev.page - 1,
          }));
        } else {
          fetchTableData();
        }
      })
      .catch(() => message.error('Something went wrong.'))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <DefaultTable
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        onChange={(pagination, _, sorter) => handleTableChange(pagination, sorter)}
        loading={isLoading}
        current={filters.page}
        total={total}
        onRow={row => ({
          onClick: () => {
            navigate(`${PATHS.EXPERT}/${row.id}`);
          },
        })}
      />

      <DeleteModal
        open={modalInfo !== null}
        onCancel={() => setModalInfo(null)}
        onOk={() => modalInfo && handleDeleteExpert(modalInfo.id)}
        question={`Are you sure you want to delete the expert ${modalInfo?.name}`}
      />
    </Fragment>
  );
};
