import React, { useState } from "react";
import styles from "./Input.module.scss";
import classnames from 'classnames';
import { useEffect } from "react";

interface IItemProps {
  type: "password" | "text" | "number";
  value: string | number;
  disabled?: boolean;
  isError?: boolean;
  errorLabel?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IItemProps> = ({ type, value, disabled, placeholder, isError, errorLabel, onChange, onBlur, className }) => {
  const [dangerStyle, setDangerStyle] = useState("");

  useEffect(() => {
    if (isError) {
      setDangerStyle(styles.input_danger)
    } else {
      setDangerStyle("");
    }
  }, [isError]);

  return (
    <>
      <input className={classnames(className, styles.input, dangerStyle)}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError && errorLabel && <p className={styles.error}>{errorLabel}</p>}
    </>
  )
}

export default Input;
