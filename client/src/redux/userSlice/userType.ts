export type UserFormType = {
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  phone: string;
  pass: string;
};

export type AuthorizeUserFormType = {
  email: string;
  pass: string;
};

export type PartnersSliceState = {
  partners: BackendUserType[];
};

export type BackendUserType = {
  id: number;
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  phone: string;
  pathPhoto?: string;
  // hashpass: string;
  roleid?: number;
  companyName?: string;
  active: boolean;
  description?: string;
  titleLogoPath?: string;
};
