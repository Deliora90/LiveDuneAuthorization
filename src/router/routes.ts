import { IMenu } from "../models/IMenu";
import {
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    CONFIRMATION_ROUTE,
    RECOVERY_ROUTE
} from "../utils/consts";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import EmailConfirmation from "../pages/EmailConfirmation";
import PasswordRecovery from "../pages/PasswordRecovery";

export const publicRoutes: IMenu[] = [
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
    exact: true
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
    exact: true
  },
  {
    path: CONFIRMATION_ROUTE,
    Component: EmailConfirmation,
    exact: true
  },
  {
    path: RECOVERY_ROUTE,
    Component: PasswordRecovery,
    exact: true
  }
]
