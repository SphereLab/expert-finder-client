import { SortOrder } from 'antd/es/table/interface';

export const fieldRules = [
  {
    required: true,
    message: 'This field is required',
  },
];

export const sortDirections: SortOrder[] = ['ascend', 'descend', 'ascend'];

export const statuses = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Archived',
    value: 'archived',
  },
  {
    label: 'Draft',
    value: 'draft',
  },
];
