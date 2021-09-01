import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Title.module.scss";

interface ITitleProps {
  size?: "xl" | "l";
  className?: string;
}

const Title: React.FC<ITitleProps> = ({ size, className, children }) => {
  const [style, setStyle] = useState(styles.title_xl);

  useEffect(() => {
    switch (size) {
      case ("xl"):
        setStyle(styles.title_xl);
        break;
      case ("l"):
        setStyle(styles.title_l);
        break;
      default:
        setStyle(styles.title_xl);
        break;
    }
  }, [size])

  return (
    <h2 className={classNames(className, styles.title, style)}>
      {children}
    </h2>
  )
}

export default Title;
