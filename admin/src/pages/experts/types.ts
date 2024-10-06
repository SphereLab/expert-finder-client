import { Dispatch, SetStateAction } from 'react';

import { ExpertType, PaginationType, SorterType } from '@/shared/types';

export type SetFilters = Dispatch<SetStateAction<FilterType>>;

// TODO: refactor ExpertSourceType
export interface ExpertSourceType extends ExpertType {
  id: number;
  firstName: string;
  profilePicture: string;
  yearsOfExperience: string;
  updatedAt: string;
}

export interface FilterFieldType {
  period: string;
}

export type ExpertSorterType = SorterType<
  keyof Pick<ExpertSourceType, 'firstName' | 'profilePicture' | 'updatedAt'>
>;

export type FilterType = Partial<FilterFieldType> &
  PaginationType & {
    sort: ExpertSorterType;
  };
