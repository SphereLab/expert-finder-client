export const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

export enum REFS {
  AUTH = 'auth/login',
  REFRESH_TOKEN = 'auth/refresh-token',
  EXPERTS = 'experts',
  LANGUAGES = 'languages',
  LOCATIONS = 'locations',
  POSITIONS = 'positions',
  SKILLS = 'skills',
}
