export type Company = {
  id: number;
  name: string;
  sector: string;
  description: string;
  logo: string;
};

export type MainCompany = {
  name: string;
  description: string;
  mission: string;
  vision: string;
  presidentMessage: string;
  logo: string;
  experienceYears: number;
  successfulProjects: string;
  values: string[];
  contact: {
    title: string;
    info: string;
  }[];
};
