import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useInput } from "../../hooks/useInput";
import { RECOVERY_ROUTE } from "../../utils/consts";
import classnames from "classnames";
import AuthPage from "../../hocs/AuthPage/AuthPage";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import styles from "./Login.module.scss";

const Login  = () => {
  const [isUncorrectAuth, setIsUncorrectAuth] = useState(false);

  const history = useHistory();
  const email = useInput("");
  const password = useInput("");

  const signInHandle = () => {
    if (email.value !== "example@example.com"
      && password.value !== "password2021") {
      setIsUncorrectAuth(true)
    } else {
      setIsUncorrectAuth(false);
    }
  }
  const passwordRecoveryHandle = () => {
    history.push(RECOVERY_ROUTE);
  }

  return (
    <Form onSubmit={() => { console.log("onSubmit") }}>
      <Input type="text"
        className={styles.input}
        value={email.value}
        isError={email.isUncorrectEmail || isUncorrectAuth}
        placeholder="Email"
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <Input type="password"
        className={styles.input}
        value={password.value}
        isError={isUncorrectAuth}
        errorLabel="Неверный еmail или пароль"
        placeholder="Пароль"
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      <Button className={classnames(styles.button, styles.button_ok)}
        onClick={signInHandle}>
        Войти в аккаунт
      </Button>
      <Button className={classnames(styles.button, styles.button_recovery)}
        typeStyle="secondary"
        onClick={passwordRecoveryHandle}>
        Забыли пароль?
      </Button>
    </Form>
  )
}

export default AuthPage("Войти", "Добро пожаловать, рады видеть вас снова 👋", Login);
