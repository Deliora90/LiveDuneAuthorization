/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classnames from "classnames";
import { useHistory, useLocation } from 'react-router-dom';
import {
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
  CONFIRMATION_ROUTE
} from "../../utils/consts";
import { ReactComponent as LogoImg } from "../../assets/svg/logo.svg";
import Button from "../Button/Button";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const getButtonWithText = (textButton: string, path: string, text?: string) => {
    return (
      <>
        {text && <p className={style.text}>{text}</p>}
        <Button className={style.button} onClick={() => redirectToRegistration(path)}>
          {textButton}
        </Button>
      </>
    )
  }
  const getFlatButton = (textButton: string) => {
    return (
      <Button typeStyle={"flat"} className={classnames(style.button, style.button_flat)}>
        {textButton}
      </Button>
    )
  }

  const getButtonParamByLocation = () => {
    console.log("getButtonParamByLocation", location.pathname);
    switch (location.pathname) {
      case (LOGIN_ROUTE):
        return getButtonWithText("Регистрация", REGISTRATION_ROUTE, "У вас нет аккаунта?");
      case (REGISTRATION_ROUTE):
        return getButtonWithText("Войти", LOGIN_ROUTE, "Уже есть аккаунт?");
      case (CONFIRMATION_ROUTE):
        return getFlatButton("Выйти");
      default:
        return <></>;
    }
  }

  const redirectToRegistration = (path: string) => {
    history.push(path);
  }
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="#">
          <LogoImg className={style.logo} />
        </a>
        <div className={style.control}>
          {getButtonParamByLocation()}
        </div>
      </div>
    </header>
  )
}

export default Header;
