import { useState, useContext } from "react";
import { UserContext } from "../../state/UserContext";
import { useHistory } from 'react-router-dom';
import { CONFIRMATION_ROUTE } from "../../utils/consts";
import { UserActionTypes, User } from "../../state/UserReducer";
import classnames from "classnames";
import AuthPage from "../../hocs/AuthPage/AuthPage";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import styles from "./Registration.module.scss";
import { useInput } from "../../hooks/useInput";

const Registration = () => {
  const [havePromo, setHavePromo] = useState(false);
  const [unvalid, setUnvalid] = useState(false);
  const { dispatchUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("", { isUncorrectEmail: true });
  const password = useInput("", { isEmpty: true });
  const name = useInput("");
  const promo = useInput("");

  const promoHandler = () => {
    setHavePromo((value) => !value);
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.isUncorrectEmail && !password.isEmpty) {
      dispatchUser({ type: UserActionTypes.REGISTRATION_SUCCESS, payload: new User(name.value, email.value) });
      history.push(CONFIRMATION_ROUTE);
    } else {
      dispatchUser({ type: UserActionTypes.REGISTRATION_ERROR, payload: "Что-то пошло не так" });
      setUnvalid(true);
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text"
        className={styles.input}
        value={name.value}
        placeholder="Имя"
        onChange={name.onChange}
        onBlur={name.onBlur}
      />
      <Input type="text"
        className={styles.input}
        value={email.value}
        isError={(email.touched || unvalid) && email.isUncorrectEmail}
        errorLabel="Возможно вы ошиблись в указании почтового сервиса"
        placeholder="Email"
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <Input type="password"
        className={styles.input}
        value={password.value}
        isError={(password.touched || unvalid) && password.isEmpty}
        errorLabel="Пароль не может быть пустым"
        placeholder="Пароль"
        onChange={password.onChange}
        onBlur={password.onBlur}
      />
      {havePromo
        ? <Input type="text"
          className={styles.input}
          value={promo.value}
          placeholder="Промокод"
          onChange={promo.onChange}
          onBlur={promo.onBlur}
        />
        : <Button className={classnames(styles.button, styles.button_promo)}
          typeStyle="secondary"
          onClick={promoHandler}>
          У меня есть промокод
        </Button>
      }
      <Button className={classnames(styles.button, styles.button_ok)} typeButton="submit">
        Создать аккаунт
      </Button>
      <p className={styles.conditions}>
        {"Создавая аккаунт, я согласен с "}
        <a href="/" className={styles.offer}>
          условиями оферты
        </a>
      </p>
    </Form>
  )
}

export default AuthPage("Регистрация", "Зарегистрируйся и получи доступ к аналитике аккаунтов.", Registration);
