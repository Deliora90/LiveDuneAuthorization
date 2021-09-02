import { createContext } from "react";
import { initialState, UserAction, UserState } from "./UserReducer";

interface UserContextType {
  userState: UserState;
  dispatchUser: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType>({userState: initialState, dispatchUser: () => null});
