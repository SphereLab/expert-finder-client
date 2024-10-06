import { FC } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';
import timezones from 'timezones-list';

import { FilterDropdown } from '@/components/filter-dropdown';
import { FilterFieldType, FilterType, SetFilters } from '@/pages/experts/types';
import { statuses } from '@/shared/constants';

import { FormItem } from './form-item';

const { Option } = Select;

interface FilterProps {
  setFilters: SetFilters;
}

export const Filter: FC<FilterProps> = ({ setFilters }) => {
  const [form] = Form.useForm<FilterFieldType>();

  const handleFormSubmit = (values: FilterFieldType) => {
    setFilters(prev => {
      const tempValues: FilterType = {
        page: 1,
        limit: prev.limit,
        sort: prev.sort,
        ...values,
      };

      return tempValues;
    });
  };

  const handleFormReset = () => {
    setFilters(prev => ({
      page: 1,
      limit: prev.limit,
      sort: prev.sort,
    }));
  };

  return (
    <FilterDropdown form={form} onFinish={handleFormSubmit} onReset={handleFormReset}>
      <FormItem name="search" label="Search">
        <Input placeholder="Search" />
      </FormItem>

      <FormItem name="status" label="Status">
        <Select placeholder="Select status" popupClassName="dropdown-popup">
          {statuses.map(status => (
            <Option key={status.value} value={status.value}>
              {status.label}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem name="timezone" label="Timezone">
        <Select placeholder="Select timezone" showSearch optionFilterProp="label">
          {timezones.map(timezone => (
            <Option key={timezone.tzCode} value={timezone.tzCode} label={timezone.label}>
              {timezone.label}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem name="totalYears" label="Total years">
        <InputNumber className="fullWidth" placeholder="Enter total years here" />
      </FormItem>

      <FormItem name="yearsOfExpertise" label="Years of expertise">
        <Input placeholder="Enter years of expertise here" />
      </FormItem>
    </FilterDropdown>
  );
};
