import React, { useState } from "react";
import classnames from "classnames";
import AuthPage from "../../hocs/AuthPage/AuthPage";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import styles from "./Registration.module.scss";
import { useInput } from "../../hooks/useInput";

const Registration: React.FC = () => {
  const [havePromo, setHavePromo] = useState(false);

  const email = useInput("", { isUncorrectEmail: true });
  const password = useInput("");
  const name = useInput("");
  const promo = useInput("");

  const promoHandler = () => {
    setHavePromo((value) => !value);
  }

  return (
    <Form onSubmit={() => { console.log("onSubmit") }}>
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
        isError={email.touched && email.isUncorrectEmail}
        errorLabel="Возможно вы ошиблись в указании почтового сервиса"
        placeholder="Email"
        onChange={email.onChange}
        onBlur={email.onBlur}
      />
      <Input type="password"
        className={styles.input}
        value={password.value}
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
          type="secondary"
          onClick={promoHandler}>
          У меня есть промокод
        </Button>
      }
      <Button className={classnames(styles.button, styles.button_ok)}>Создать аккаунт</Button>
      <p className={styles.conditions}>
        Создавая аккаунт, я согласен с
        <a href="/" className={styles.offer}>
          {" условиями оферты"}
        </a>
      </p>
    </Form>
  )
}

export default AuthPage("Регистрация", "Зарегистрируйся и получи доступ к аналитике аккаунтов.", Registration);
