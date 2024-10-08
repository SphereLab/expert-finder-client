import { ROLES } from './enums';

export interface UserInfo {
  access_token: string;
  refresh_token: string;
  id: number;
  googleId: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  key?: string;
  firstName: null | string;
  lastName: null | string;
  role: ROLES;
  email: string;
  slackId: null | string;
}

export type TableResponse<T> = {
  pagesCount: number;
  data: T[];
  totalCount: number;
};

export interface PaginationType {
  page: number;
  limit: number;
}

export interface SorterType<T> {
  field: T;
  order: 'asc' | 'desc';
}

export interface Language {
  id: number;
  name: string;
  slug: string;
  status: string;
}

export interface Location {
  id: number;
  name: string;
  slug: string;
  timezone: null;
  status: string;
}

export interface Position {
  id: number;
  name: string;
  slug: string;
  categoryHeading: string;
  metaDescription: null;
  categoryRichTextDescription: string;
  status: string;
}

export interface Skill {
  id: number;
  name: string;
  slug: string;
  categoryHeading: string;
  metaDescription: null;
  categoryRichTextDescription: string;
  status: string;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExpertType {
  displayName: string;
  totalYears: number;
  aboutMe: string;
  experienceHighlights: string;
  name: string;
  slug: string;
  expertStatus: string;
  yearsOfExpertise: string;
  positionId: number;
  technologiesAndSkills: string;
  projectIndustriesHistory: string;
  educationAndCertification: string;
  locationId: number;
  timezone: string;
  skills: {
    skillId: number;
    isExpertise: boolean;
  }[];
  skillIds: number[];
  expertiseIds: number[];
  languages: {
    languageId: number;
  }[];
  languagesIds: number[];
}
