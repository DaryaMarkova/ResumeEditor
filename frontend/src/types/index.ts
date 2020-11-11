export interface IProfile {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  summary?: string;
  email?: string;
  phone?: string;
  skills?: Skill[];
  hasAvatar?: boolean;
  employmentHistory?: EmploymentHistory[];
}

export enum SkillLevelType {
  Novice,
  Beginner,
  Skillfull,
  Experienced,
  Expert,
}

export interface IdentifiedEntity {
  id: number;
  [key: string]: any;
}

export interface Skill extends IdentifiedEntity {
  level: SkillLevelType;
  skillName: string;
  id: number;
}

export interface EmploymentHistory extends IdentifiedEntity {
  id: number;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city?: string;
  description?: string;
}

export const ProfileDefaults = {
  jobTitle: "Job title",
  firstName: "Firstname",
  lastName: "Lastname",
  email: "test@mail.ru",
  phone: "xxxxxxxxxxx",
};
