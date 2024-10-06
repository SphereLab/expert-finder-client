import { useState } from 'react';

import { Loader } from '@/components/loader';
import { PageLayout } from '@/components/page-layout';
import { useTitle } from '@/utils/hooks/use-title';

import { ExpertsHeader } from './components/experts-header';
import { ExpertsTable } from './components/experts-table';
import { FilterType } from './types';

export const Experts = () => {
  const [filters, setFilters] = useState<FilterType>({
    page: 1,
    limit: 10,
    sort: {
      field: 'updatedAt',
      order: 'desc',
    },
  });
  const [isPageLoading, setIsPageLoading] = useState(false);

  useTitle('Experts');

  return (
    <PageLayout>
      {isPageLoading && <Loader />}
      <ExpertsHeader setFilters={setFilters} setIsPageLoading={setIsPageLoading} />
      <ExpertsTable setFilters={setFilters} filters={filters} />
    </PageLayout>
  );
};
