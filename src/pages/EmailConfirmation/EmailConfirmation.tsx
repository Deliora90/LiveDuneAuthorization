import { useState, useContext } from "react";
import { UserContext } from "../../state/UserContext";
import classnames from "classnames";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Description from "../../components/Description/Description";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import { useInput } from "../../hooks/useInput";
import styles from "./EmailConfirmation.module.scss";

const EmailConfirmation = () => {
  const [letterNotSent, setLetterNotSent] = useState(false);
  const email = useInput("", { isUncorrectEmail: true });
  const { userState } = useContext(UserContext);

  const letterNotSentHandle = () => {
    setLetterNotSent((val) => !val);
  }
  const onSentHandle = () => {
    if(letterNotSent) {
      console.log("Отправть заново");
    } else {
      console.log("Отправть");
    }
  }

  const getContent = () => {
    if (!letterNotSent) {
      return (
        <>
          <Title size="xl" className={styles.title}>
            Подтвердите ваш&nbsp;e&#8209;mail
          </Title>
          <Description className={styles.description}>
            {userState.user?.name}, на ваш E-mail отправлено письмо со ссылкой для подтверждения.
            Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.
          </Description>
        </>
      )
    } else {
      return (
        <>
          <Title size="xl" className={styles.title}>
            Мне не пришло письмо
          </Title>
          <Description className={styles.description_bad}>
            Письмо может прийти с задержкой в 5-10 минут.<br/>
            Также проверьте разные папки почтового ящика
            (актуально для gmail.com) и папку "Спам".Если письмо
            все же не пришло, повторите попытку или напишите об
            этом в тех.поддержку <a href="mailto:support@livedune.ru" className={styles.mail}>support@livedune.ru</a> и мы активируем ваш аккаунт.
          </Description>
          <Input type="text"
            className={styles.input}
            value={email.value}
            placeholder="Email"
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
        </>
      )
    }
  }

  return (
    <Container className={styles.container}>
      {getContent()}
      <Button className={classnames(styles.button, styles.button_primary)}
        onClick={onSentHandle}>
        {letterNotSent ? "Отправить  заново" : "Перейти к почте"}
      </Button>
      <Button className={classnames(styles.button, styles.button_secondary)}
        typeStyle={letterNotSent ? "flat" : "secondary"}
        onClick={letterNotSentHandle}>
        {letterNotSent ? "Отменить" : "Мне не пришло письмо"}
      </Button>
    </Container>
  )
}

export default EmailConfirmation;
