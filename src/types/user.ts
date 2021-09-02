export class User {
  name: string;
  email: string;
  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }
}

export interface UserState {
  user: null | User;
  error: null | string;
}

export enum UserActionTypes {
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION_ERROR = "REGISTRATION_ERROR",
}

interface RegistrationUserSuccessAction {
  type: UserActionTypes.REGISTRATION_SUCCESS;
  payload: User;
}
interface RegistrationUserErrorAction {
  type: UserActionTypes.REGISTRATION_ERROR;
  payload: string;
}
export type UserAction =
| RegistrationUserSuccessAction
| RegistrationUserErrorAction

