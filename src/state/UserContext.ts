import { createContext } from "react";
import { UserAction, UserState } from "../types/user";
import { initialState } from "./UserReducer";

interface UserContextType {
  userState: UserState;
  dispatchUser: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType>({userState: initialState, dispatchUser: () => null});
