export interface IProfile {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  summary?: string;
  email?: string;
  phone?: string;
  skills?: Skill[];
  links?: SocialLink[];
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
  levelShown: boolean;
  skillName: string;
}

export interface SocialLink extends IdentifiedEntity {
  label: string;
  href: string;
}

export interface EmploymentHistory extends IdentifiedEntity {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  city?: string;
  description?: string;
}

export interface Education extends IdentifiedEntity {
  school: string;
  degree: string;
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
