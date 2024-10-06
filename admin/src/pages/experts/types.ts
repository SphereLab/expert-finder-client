import { Dispatch, SetStateAction } from 'react';

import { PaginationType, SorterType } from '@/shared/types';

export type SetFilters = Dispatch<SetStateAction<FilterType>>;

export interface ExpertsSourceType {
  id: number;
  firstName: string;
  profilePicture: string;
  yearsOfExperience: string;
  updatedAt: string;
}

export interface FilterFieldType {
  period: string;
}

export type ExpertsSorterType = SorterType<
  keyof Pick<ExpertsSourceType, 'firstName' | 'profilePicture' | 'updatedAt'>
>;

export type FilterType = Partial<FilterFieldType> &
  PaginationType & {
    sort: ExpertsSorterType;
  };
