import { Dispatch, SetStateAction } from 'react';

import { ExpertType, PaginationType, SorterType } from '@/shared/types';

export type SetFilters = Dispatch<SetStateAction<FilterType>>;

export interface ExpertSourceType extends ExpertType {
  id: number;
  displayName: string;
  totalYears: number;
  aboutMe: string;
  experienceHighlights: string;
  name: string;
  technologiesAndSkills: string;
  projectIndustriesHistory: string;
  educationAndCertification: string;
  expertStatus: 'active' | 'draft' | 'archived';
  slug: string;
  yearsOfExpertise: string;
  positionId: number;
  timezone: string;
  locationId: number;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FilterFieldType {
  search: string;
  status: string;
  timezone: string;
  totalYears: string;
  yearsOfExpertise: string;
}

export type ExpertSorterType = SorterType<keyof Pick<ExpertSourceType, 'name' | 'updatedAt'>>;

export type FilterType = Partial<FilterFieldType> &
  PaginationType & {
    sort: ExpertSorterType;
  };
