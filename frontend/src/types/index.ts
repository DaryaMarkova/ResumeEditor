export interface IProfile {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  hasAvatar?: boolean;
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
}

export const ProfileDefaults = {
  jobTitle: "Job title",
  firstName: "Firstname",
  lastName: "Lastname",
  email: "test@mail.ru",
  phone: "xxxxxxxxxxx",
};
