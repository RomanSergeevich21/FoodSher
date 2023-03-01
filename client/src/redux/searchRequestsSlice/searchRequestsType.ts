export type BackendRequest = {
  id: number;
  title: string;
  lifeTimeStart: Date;
  lifeTimeEnd: Date;
  address: string;
  contactPhone: string;
  contactName: string;
  description: string;
  partnerid: number;
  statusid: number;
  User: UserCompany;
  Products?: BackendProductsTitle[];
};

export type BackendRequestSlice = {
  requests: BackendRequest[];
  searchRequests: BackendRequest[];
};

export type UserCompany = {
  id: number;
  companyName: string;
  titleLogoPath: string;
};

export type BackendProductsTitle = {
  title: string;
  Category: BackendCategory;
};

export type BackendCategory = {
  id: number;
  title: string;
};
