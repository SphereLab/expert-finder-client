import { SortOrder } from 'antd/es/table/interface';

export const fieldRules = [
  {
    required: true,
    message: 'This field is required',
  },
];

export const sortDirections: SortOrder[] = ['ascend', 'descend', 'ascend'];

export const statusesList = {
  active: {
    name: 'Active',
    color: '#1677FF',
    backgroundColor: '#E6F4FF',
    borderColor: '#91CAFF',
  },
  draft: {
    name: 'Draft',
    color: 'rgba(48, 58, 93, 0.88)',
    backgroundColor: '#EBEBEC',
    borderColor: 'rgba(48, 58, 93, 0.15)',
  },
  archived: {
    name: 'Archived',
    color: '#FAAD14',
    backgroundColor: '#FFFBE6',
    borderColor: '#FFE58F',
  },
};
