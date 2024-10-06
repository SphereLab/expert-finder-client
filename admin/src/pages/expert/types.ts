export interface ExpertFormFields {
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
  skillIds: number[];
  expertiseIds: number[];
  languages: Language[];
}

export interface Language {
  languageId: number;
  writing: string;
  reading: string;
  listening: string;
  speaking: string;
  general: string;
}
