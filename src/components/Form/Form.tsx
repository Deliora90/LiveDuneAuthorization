import React from "react";
import classnames from 'classnames';
import styles from "./Form.module.scss";

interface IFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}
const Form: React.FC<IFormProps> = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className={classnames(className, styles.form)}>
      {children}
    </form>
  )
}

export default Form;
