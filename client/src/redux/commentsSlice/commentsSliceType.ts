import type { BackendUserType } from '../userSlice/userType';

// export type CommentedUserType = {


// }

export type CommentType = {
  id: string;
  body: string;
  authorid: number;
  createdAt: string;
  userid: number;
  firstName: string;
  secondName: string;
  lastName: string;
  pathPhoto: string;
};

export type CommentSliceType = {
  comments: CommentType[];
};

export type CommentFormType = {
  body: string;
  authorid: number;
};
