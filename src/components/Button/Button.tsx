import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import styles from "./Button.module.scss";
import { ReactComponent as Load } from "../../assets/svg/load.svg";

interface IButtonProps {
  type?: "primary" | "secondary" | "flat";
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ type, onClick, isDisabled, className, isLoading, children }) => {
  const [style, setStyle] = useState(styles.button_primary);

  useEffect(() => {
    switch (type) {
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
  }, [type])

  return (
    <button onClick={onClick} disabled={isDisabled || isLoading} type="button" className={classNames(className, styles.button, style)}>
      <p className={styles.text}>
        {isLoading && <Load className={styles.loading} />}
        {children}
      </p>
    </button>
  )
}

export default Button;
