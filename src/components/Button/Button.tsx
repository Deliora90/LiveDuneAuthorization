import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import styles from "./Button.module.scss";
import { ReactComponent as Load } from "../../assets/svg/load.svg";

interface IButtonProps {
  typeStyle?: "primary" | "secondary" | "flat";
  typeButton?: "button" | "submit" | "reset";
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ typeStyle, typeButton, onClick, isDisabled, className, isLoading, children }) => {
  const [style, setStyle] = useState(styles.button_primary);

  useEffect(() => {
    switch (typeStyle) {
      case ("primary"):
        setStyle(styles.button_primary);
        break;
      case ("secondary"):
        setStyle(styles.button_secondary);
        break;
      case ("flat"):
        setStyle(styles.button_flat);
        break;
      default:
        setStyle(styles.button_primary);
        break;
    }
  }, [typeStyle])

  return (
    <button onClick={onClick}
      disabled={isDisabled || isLoading}
      className={classNames(className, styles.button, style)}
      type={typeButton}>
      <p className={styles.text}>
        {isLoading && <Load className={styles.loading} />}
        {children}
      </p>
    </button>
  )
}

export default Button;
