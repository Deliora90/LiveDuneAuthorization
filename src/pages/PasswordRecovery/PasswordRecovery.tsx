import { useState } from "react";
import Container from "../../components/Container/Container";
import LockImg from "../../assets/images/lock.png";
import MailImg from "../../assets/images/mail.png";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import { useInput } from "../../hooks/useInput";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classnames from "classnames";
import Form from "../../components/Form/Form";
import styles from "./PasswordRecovery.module.scss";

const PasswordRecovery = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUncorrectRecovery, setIsUncorrectRecovery] = useState(false);

  const email = useInput("", { isUncorrectEmail: true });

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("sdsds")
    setIsUncorrectRecovery(false);
    email.onBlur(e);
  };

  const onSubmit = () => {
    if (email.value === "example@example.com") {
      setIsUncorrectRecovery(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setEmailSent(true);
      }, 5000);
    } else {
      setIsUncorrectRecovery(true);
    }
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
          <Form className={styles.form} onSubmit={onSubmit}>
            <Input type="text"
              className={styles.input}
              value={email.value}
              isError={(email.isUncorrectEmail && email.touched ) || isUncorrectRecovery}
              errorLabel="Неверный еmail"
              placeholder="Email"
              onChange={email.onChange}
              onBlur={onBlur}
              disabled={loading}
            />
            <Button className={classnames(styles.button, styles.button_primary)}
              isLoading={loading}
            >
              Отправить
            </Button>
            <Button className={classnames(styles.button, styles.button_flat)}
              typeStyle={"flat"}
              onClick={() => { }}>
              Отменить
            </Button>
          </Form>
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
