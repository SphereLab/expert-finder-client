import { ROLES } from './enums';

export interface AuthResponse extends TokenInfo {
  user: UserInfo;
}

export interface TokenInfo {
  token: string;
  refreshToken: string;
  tokenExpires: number;
}

export interface UserInfo {
  email: string;
  photo: string;
  firstName: string;
  lastName: string;
  role: ROLES;
  invoiceTemplateId: null;
  subsidiaryId: null;
  personalInfoId: null;
  legalInfoId: null;
  updatedAt: string;
  id: number;
  createdAt: string;
  deletedAt: null;
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
