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

export interface Skill {
  level: SkillLevelType;
  skillName: string;
  id: number;
}

export interface EmploymentHistory {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city?: string;
}

export const ProfileDefaults = {
  jobTitle: "Job title",
  firstName: "Firstname",
  lastName: "Lastname",
  email: "test@mail.ru",
  phone: "xxxxxxxxxxx",
};
