import { UserActions } from "./user.contants";

export interface GetUser {
  type: typeof UserActions.GET_USER_DATA,
  data: any;
}

export const getUser = (data: any) => (
  { type: UserActions.GET_USER_DATA, data}
);
