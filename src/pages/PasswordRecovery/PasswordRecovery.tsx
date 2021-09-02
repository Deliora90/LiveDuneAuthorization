import { useState } from "react";
import Container from "../../components/Container/Container";
import styles from "./PasswordRecovery.module.scss";
import LockImg from "../../assets/images/lock.png";
import MailImg from "../../assets/images/mail.png";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import { useInput } from "../../hooks/useInput";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classnames from "classnames";

const PasswordRecovery = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = useInput("", { isUncorrectEmail: true });

  const onSend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
    }, 5000);
  }

  const getContent = () => {
    if (!emailSent) {
      return (
        <>
          <img className={styles.img} src={LockImg} alt="Lock" />
          <Title size="l" className={styles.title}>
            Восстановить пароль
          </Title>
          <Description className={styles.description}>
            Введите e-mail, на который регистрировались ранее
          </Description>
          <Input type="text"
            className={styles.input}
            value={email.value}
            placeholder="Email"
            onChange={email.onChange}
            onBlur={email.onBlur}
            disabled={loading}
          />
          <Button className={classnames(styles.button, styles.button_primary)}
            onClick={onSend}
            isLoading={loading}
          >
            Отправить
          </Button>
          <Button className={classnames(styles.button, styles.button_flat)}
            typeStyle={"flat"}
            onClick={() => { }}>
            Отменить
          </Button>
        </>
      )
    } else {
      return (
        <>
          <img className={styles.img} src={MailImg} alt="Mail" />
          <Title size="l" className={styles.title}>
            Письмо отправлено
          </Title>
          <Description className={styles.description}>
            На указанный вами e-mail было отправлено письмо для смены пароля
          </Description>
          <Button className={classnames(styles.button, styles.button_primary)}>
            Вернуться на главную
          </Button>
        </>
      )
    }
  }

  return (
    <Container className={styles.container}>
      {getContent()}
    </Container>
  )
}

export default PasswordRecovery;
