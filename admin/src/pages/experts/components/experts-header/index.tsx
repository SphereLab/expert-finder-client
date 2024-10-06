import { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { PATHS } from '@/components/routes/paths';

import { SetFilters } from '../../types';
import { Filter } from './components/filter';

import styles from './experts-header.module.css';

interface ExpertsHeaderProps {
  setFilters: SetFilters;
  setIsPageLoading: Dispatch<SetStateAction<boolean>>;
}

export const ExpertsHeader: FC<ExpertsHeaderProps> = ({ setFilters }) => {
  const navigate = useNavigate();

  return (
    <Row className={styles.root} justify="space-between">
      <Filter setFilters={setFilters} />
      <Button icon={<PlusOutlined />} onClick={() => navigate(PATHS.EXPERT)}>
        Add New Expert
      </Button>
    </Row>
  );
};
