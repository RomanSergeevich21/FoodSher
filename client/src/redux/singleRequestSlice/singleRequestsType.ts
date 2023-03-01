import type { BackendUserType } from '../userSlice/userType';

export type ProductType = {
    id: number;
    title: string,
    price: number,
    photoPath: string,
    count: number,
    description: string,
    categoryid: number,
    requestid: number,
}

export type BackendRequestWithUserType = {
  title: string;
  lifeTimeStart?: string;
  lifeTimeEnd: string;
  address: string;
  contactPhone: number;
  contactName: string;
  description: string;
  id: number;
  partnerid: number;
  statusid: number;
  User: BackendUserType;
  Products: ProductType[];
};
