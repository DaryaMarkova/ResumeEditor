export interface IProfile {
  jobTitle?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  hasAvatar?: boolean;
}

export const ProfileDefaults = {
  jobTitle: "Job title",
  firstName: "Firstname",
  lastName: "Lastname",
  email: "test@mail.ru",
  phone: "xxxxxxxxxxx",
};
