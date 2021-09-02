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


export const initialState: UserState = {
  user: null,
  error: null
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.REGISTRATION_SUCCESS:
      return { user: action.payload, error: null };
    case UserActionTypes.REGISTRATION_ERROR:
      return { error: action.payload, user: null };

    default:
      return state;
  }
}
