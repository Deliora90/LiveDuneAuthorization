import { UserAction, UserActionTypes, UserState } from "../types/user";

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
