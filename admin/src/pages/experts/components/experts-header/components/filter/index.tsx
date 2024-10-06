import { FC } from 'react';
import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';

import { FilterDropdown } from '@/components/filter-dropdown';
import { FilterFieldType, FilterType, SetFilters } from '@/pages/experts/types';

import styles from './filter.module.css';

const FormItem = Form.Item;

interface FilterProps {
  setFilters: SetFilters;
}

export const Filter: FC<FilterProps> = ({ setFilters }) => {
  const [form] = Form.useForm<FilterFieldType>();

  const handleFormSubmit = (values: FilterFieldType) => {
    const { period } = values;

    setFilters(prev => {
      const tempValues: FilterType = {
        page: 1,
        limit: prev.limit,
        sort: prev.sort,
      };

      if (period) {
        tempValues.period = dayjs(period).format('MM-YYYY');
      }

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
      <FormItem<FilterFieldType> className={styles.formItem} label="Period" name="period">
        <DatePicker
          popupClassName="dropdown-popup"
          picker="month"
          disabledDate={current => current.valueOf() > Date.now()}
        />
      </FormItem>
    </FilterDropdown>
  );
};
