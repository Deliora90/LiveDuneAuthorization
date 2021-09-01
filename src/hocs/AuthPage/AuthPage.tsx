import React from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import Link from "../../components/Link/Link";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import styles from "./AuthPage.module.scss";

function authPage(title: string, desc: string, Component: React.FC): React.FC {
  return (() => {
    return (
      <Container className={styles.container}>
        <Title size="xl" className={styles.title}>{title}</Title>
        <Description className={styles.description}>
          {desc}
        </Description>
        <div className={styles.links}>
          <div className={styles.link_container}>
            <Link href="#" className={styles.link} Icon={FacebookSvg}>
              Войти через Facebook
            </Link>
          </div>
          <div className={styles.link_container}>
            <Link href="#" className={styles.link} Icon={GoogleSvg}>
              Войти через Google
            </Link>
          </div>
        </div>
        <Description className={styles.choice}>
          или
        </Description>
        <Component />
      </Container>
    )
  })
}
export default authPage;
