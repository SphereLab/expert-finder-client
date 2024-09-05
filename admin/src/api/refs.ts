export const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

export enum REFS {
  AUTH = 'auth/google/login',
  REFRESH_TOKEN = 'auth/exchange-refresh-token',
  PROFILE = 'profile',
  REQUESTS = 'requests',
  PROFILE_REQUESTS = 'profile-requests',
  TEMPLATES = 'templates',
  EMPLOYEES = 'employees',
  INVOICES = 'invoices',
  POSITIONS = 'positions',
  DEPARTMENTS = 'departments',
  SUBSIDIARIES = 'subsidiaries',
  GOOGLE_STORAGE = 'google-storage',
  USERS = 'users',
}
