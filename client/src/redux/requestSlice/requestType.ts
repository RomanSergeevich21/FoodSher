export type RequestFormType = {
  title: string;
  lifeTimeStart?: Date | null;
  lifeTimeEnd: Date | null;
  adress: string;
  contactPhone: number | null;
  contactName: string;
  description: string;
};

export type BackendRequestType = {
  //   title: string;
  //   lifeTimeStart?: Date;
  //   lifeTimeEnd: Date;
  //   adress: string;
  //   contactPhone: number;
  //   contactName: string;
  //   description: string;
  id: number;
  partnerid: number;
  statusid: number;
} & RequestFormType;


